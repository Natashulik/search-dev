import { useState, useEffect } from "react";
import { ReactComponent as IconMoon } from "../assets/moon.svg";
import { ReactComponent as IconSun } from "../assets/sun.svg";

export const Switcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? 'Light theme' : 'Dark theme';
  const ThemeIcon = isDark ? IconSun : IconMoon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return <div className='switcher' onClick={() => setIsDark(!isDark)}>
    <ThemeIcon className='theme_icon' />
    <span className="theme_name"> {themeText}</span>
  </div>
}