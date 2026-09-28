/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#1E293B",
    background: "#F8FAFC",
    backgroundElement: "#FFFFFF",
    backgroundSelected: "#E8EEFF",
    textSecondary: "#64748B",

    primary: "#4F46E5",
    primaryLight: "#EEF2FF",
    border: "#E2E8F0",

    success: "#16A34A",
    warning: "#D97706",
    danger: "#DC2626",

    note: "#FFFDF5",
    noteText: "#334155",
  },

  dark: {
    text: "#F8FAFC",
    background: "#0F172A",
    backgroundElement: "#1E293B",
    backgroundSelected: "#27345F",
    textSecondary: "#94A3B8",

    primary: "#818CF8",
    primaryLight: "#1E1B4B",
    border: "#334155",

    success: "#4ADE80",
    warning: "#FBBF24",
    danger: "#F87171",

    note: "#292524",
    noteText: "#E7E5E4",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
