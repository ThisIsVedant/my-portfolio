'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeToggle, type Theme } from '@/components/ui/curtain-theme-toggle';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder same size as button to avoid layout shift
    return <div style={{ width: 36, height: 36 }} />;
  }

  const handleChange = (t: Theme) => {
    setTheme(t);
  };

  return (
    <ThemeToggle
      variant="icon"
      defaultTheme={(resolvedTheme as Theme) ?? 'dark'}
      duration={550}
      onThemeChange={handleChange}
    />
  );
}
