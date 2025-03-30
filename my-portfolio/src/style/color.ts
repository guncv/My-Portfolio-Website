// style/useColors.ts
import { useTheme } from '../context/ThemeContext';

export const useColors = () => {
  const { theme } = useTheme();

  return {
    BACKGROUND_PRIMARY: theme === 'dark' ? '#0A1123' : '#F9FAFB',
    TEXT_PRIMARY: theme === 'dark' ? '#D1D5DB' : '#0A1123',
    NAV_PRIMARY: theme === 'dark' ? '#1F2937' : '#f9fafb',
    BACKGROUND_SECONDARY: theme === 'dark' ? '#111827' : '#F9FAFB',
    BACKGROUND_TERTIARY: theme === 'dark' ? '#374151' : '#E5E7EB',
  };
};
