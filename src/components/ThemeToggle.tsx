
import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun size={18} />;
      case 'dark': return <Moon size={18} />;
      default: return <Monitor size={18} />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center">
        {getIcon()}
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System'}
      </span>
    </button>
  );
};

export default ThemeToggle;
