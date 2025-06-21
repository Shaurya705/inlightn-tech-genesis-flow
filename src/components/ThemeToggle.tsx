
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/60 hover:border-primary/40 transition-all duration-300 group shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {theme === 'light' ? (
          <Sun size={18} className="text-amber-500" />
        ) : (
          <Moon size={18} className="text-blue-400" />
        )}
      </div>
      <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-popover/95 backdrop-blur-sm text-popover-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-border/50">
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
