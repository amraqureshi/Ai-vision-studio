import type {
  UserSettings,
  ThemeOption,
  LanguageOption,
} from "../types/settings";

const mockSettings: UserSettings = {
  avatarUrl: "/images/avatar-placeholder.png",
  username: "vision.admin",
  email: "admin@aivisionstudio.ai",
  notificationsEnabled: true,
  weeklySummary: false,
  theme: "dark",
  language: "en",
};

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const fetchUserSettings = async (): Promise<UserSettings> => {
  await wait(400);
  return mockSettings;
};

export const saveUserSettings = async (
  settings: UserSettings,
): Promise<UserSettings> => {
  await wait(500);
  return settings;
};

export const deleteUserAccount = async (): Promise<void> => {
  await wait(500);
};
