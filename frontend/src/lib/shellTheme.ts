/**
 * Shell palettes for screens that still use inline colors (auth + dashboard chrome).
 * Tailwind/shadcn surfaces follow CSS variables; these keep the older glass layouts
 * in sync with `.light` / `.dark`.
 */

import { useTheme } from '@/contexts/ThemeContext';

export interface ShellTheme {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryBright: string;
  onPrimary: string;
  gold: string;
  green: string;
  orange: string;
  purple: string;
  cyan: string;
  bgVoid: string;
  bgBase: string;
  bgCard: string;
  bgElevated: string;
  bgSurface: string;
  bgOverlay: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderHover: string;
  borderGold: string;
  success: string;
  danger: string;
  goldGlow: string;
  goldSubtle: string;
}

export const darkShell: ShellTheme = {
  primary: '#00c7be',
  primaryHover: '#00a89f',
  primaryLight: 'rgba(0, 199, 190, 0.15)',
  primaryBright: '#f0c95c',
  onPrimary: '#0b1215',
  gold: '#e2b347',
  green: '#34c759',
  orange: '#f59e0b',
  purple: '#a78bfa',
  cyan: '#00c7be',
  bgVoid: '#050508',
  bgBase: '#0b1215',
  bgCard: 'rgba(18, 18, 26, 0.9)',
  bgElevated: 'rgba(255, 255, 255, 0.05)',
  bgSurface: 'rgba(255, 255, 255, 0.08)',
  bgOverlay: 'rgba(11, 18, 21, 0.75)',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  border: 'rgba(255, 255, 255, 0.08)',
  borderHover: 'rgba(255, 255, 255, 0.15)',
  borderGold: 'rgba(0, 199, 190, 0.15)',
  success: '#34c759',
  danger: '#ff6b6b',
  goldGlow: 'rgba(0, 199, 190, 0.5)',
  goldSubtle: 'rgba(0, 199, 190, 0.1)',
};

export const lightShell: ShellTheme = {
  primary: '#0d9488',
  primaryHover: '#0f766e',
  primaryLight: 'rgba(13, 148, 136, 0.12)',
  primaryBright: '#b8860b',
  onPrimary: '#ffffff',
  gold: '#b8860b',
  green: '#16a34a',
  orange: '#d97706',
  purple: '#7c3aed',
  cyan: '#0d9488',
  bgVoid: '#f4f6fb',
  bgBase: '#f8fafc',
  bgCard: '#ffffff',
  bgElevated: '#ffffff',
  bgSurface: '#f1f5f9',
  bgOverlay: 'rgba(248, 250, 252, 0.86)',
  textPrimary: '#0f172a',
  textSecondary: '#334155',
  textMuted: '#64748b',
  border: 'rgba(15, 23, 42, 0.10)',
  borderHover: 'rgba(15, 23, 42, 0.18)',
  borderGold: 'rgba(13, 148, 136, 0.28)',
  success: '#16a34a',
  danger: '#dc2626',
  goldGlow: 'rgba(13, 148, 136, 0.28)',
  goldSubtle: 'rgba(13, 148, 136, 0.08)',
};

export function useShellTheme(): ShellTheme {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === 'light' ? lightShell : darkShell;
}
