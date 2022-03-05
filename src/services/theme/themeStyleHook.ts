// Import core
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Need to rewrap next-theme function for avoid className mis match
 */
export const useThemeWrap = (): [boolean, (value: string) => void] => {
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState(false);
  useEffect(() => {
    setValue(theme == 'dark' ? false : true);
  }, [theme])
  return [value, setTheme]; // as cosnt
};

export default useThemeWrap;