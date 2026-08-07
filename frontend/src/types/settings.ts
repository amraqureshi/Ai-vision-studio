export type ThemeOption = "dark" | "light";
export type LanguageOption = "en" | "es" | "fr" | "de";

export interface UserSettings {
  avatarUrl: string;
  username: string;
  email: string;
  notificationsEnabled: boolean;
  weeklySummary: boolean;
  theme: ThemeOption;
  language: LanguageOption;
}
