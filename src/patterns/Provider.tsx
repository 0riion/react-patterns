import React, { createContext, useContext, useState } from "react";

interface Theme {
  backgroundColor: string;
  color: string;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const lightTheme: Theme = {
  backgroundColor: '#fff',
  color: '#000',
};

const darkTheme: Theme = {
  backgroundColor: '#303030',
  color: '#fff',
};

const initialThemeContext: ThemeContextProps = {
  theme: darkTheme,
  toggleTheme: () => { console.warn('no theme provider') },
};

const ThemeContext = createContext<ThemeContextProps>(initialThemeContext);

function ChildComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={theme}>
      <p>PROVIDER PATTERN</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const value: ThemeContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function ParentComponent() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}
