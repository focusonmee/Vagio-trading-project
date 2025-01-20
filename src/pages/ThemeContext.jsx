import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo Context
const ThemeContext = createContext();

// Custom hook để sử dụng ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Provider cho ThemeContext
export const ThemeProvider = ({ children }) => {
  const DARK_MODE_STORAGE_KEY = "isDarkMode";
  const LIGHT_MODE_CLASS = "";

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hàm toggle chế độ
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem(DARK_MODE_STORAGE_KEY, !isDarkMode);
  };

  // Kiểm tra trạng thái từ localStorage khi ứng dụng load
  useEffect(() => {
    const savedTheme = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    if (savedTheme === "true") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? "dark" : LIGHT_MODE_CLASS}>{children}</div>
    </ThemeContext.Provider>
  );
};
