import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Trash2, Save } from "lucide-react";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import CheckboxField from "../components/ui/CheckboxField";
import PageHeader from "../components/ui/PageHeader";
import AvatarUpload from "../components/dashboard/AvatarUpload";
import SettingsSection from "../components/dashboard/SettingsSection";
import ThemeToggle from "../components/dashboard/ThemeToggle";
import LanguageSelector from "../components/dashboard/LanguageSelector";
import {
  deleteUserAccount,
  fetchUserSettings,
  saveUserSettings,
} from "../services/settingsService";
import type { UserSettings } from "../types/settings";

const initialSettings: UserSettings = {
  avatarUrl: "/images/avatar-placeholder.png",
  username: "",
  email: "",
  notificationsEnabled: true,
  weeklySummary: false,
  theme: "dark",
  language: "en",
};

const SettingsPage = () => {
  const [settings, setSettings] = useState<UserSettings>(initialSettings);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loadSettings = async () => {
      setLoading(true);
      const data = await fetchUserSettings();
      setSettings(data);
      setLoading(false);
    };

    void loadSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await saveUserSettings(settings);
    setSaving(false);
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    await deleteUserAccount();
    setDeleting(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-[1200px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <PageHeader
          title="Settings"
          subtitle="Account settings"
          description="Manage your profile, notification preferences, theme, and language."
          actions={
            <div className="flex items-center gap-3 text-slate-300">
              <Save size={20} className="text-cyan-400" />
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Account configuration
              </span>
            </div>
          }
          className="border-b border-white/10 pb-5"
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SettingsSection
              title="Profile"
              description="Video AI account details"
            >
              <AvatarUpload
                settings={settings}
                onAvatarChange={(url) =>
                  setSettings({ ...settings, avatarUrl: url })
                }
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Username"
                  icon={<User size={16} />}
                  value={settings.username}
                  onChange={(event) =>
                    setSettings({ ...settings, username: event.target.value })
                  }
                />
                <InputField
                  label="Email"
                  icon={<Mail size={16} />}
                  type="email"
                  value={settings.email}
                  onChange={(event) =>
                    setSettings({ ...settings, email: event.target.value })
                  }
                />
              </div>
            </SettingsSection>

            <SettingsSection
              title="Security"
              description="Update password securely"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="New password"
                  icon={<Lock size={16} />}
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <InputField
                  label="Confirm password"
                  icon={<Lock size={16} />}
                  type="password"
                />
              </div>
            </SettingsSection>

            <SettingsSection
              title="Preferences"
              description="Notification and UI settings"
            >
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckboxField
                    label="Enable notifications"
                    checked={settings.notificationsEnabled}
                    onChange={(event) =>
                      setSettings({
                        ...settings,
                        notificationsEnabled: event.target.checked,
                      })
                    }
                  />
                  <CheckboxField
                    label="Weekly summary"
                    checked={settings.weeklySummary}
                    onChange={(event) =>
                      setSettings({
                        ...settings,
                        weeklySummary: event.target.checked,
                      })
                    }
                  />
                </div>
                <ThemeToggle
                  value={settings.theme}
                  onChange={(theme) => setSettings({ ...settings, theme })}
                />
                <LanguageSelector
                  value={settings.language}
                  onChange={(language) =>
                    setSettings({ ...settings, language })
                  }
                />
              </div>
            </SettingsSection>
          </div>

          <div className="space-y-6">
            <SettingsSection
              title="Account actions"
              description="Manage account controls"
            >
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/20">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                      Delete account
                    </p>
                    <p className="mt-2 text-white text-xl font-semibold">
                      Remove your account
                    </p>
                  </div>
                  <Trash2 size={24} className="text-rose-400" />
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-400">
                  Deleting your account is permanent. You will lose access to
                  all saved detection sessions and custom settings.
                </p>
                <Button
                  variant="ghost"
                  className="w-full text-rose-300 hover:bg-rose-500/10"
                  onClick={handleDeleteAccount}
                  loading={deleting}
                  type="button"
                >
                  Delete account
                </Button>
              </div>
              <Button onClick={handleSave} loading={saving} type="button">
                Save changes
              </Button>
            </SettingsSection>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
