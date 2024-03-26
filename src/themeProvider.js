// import React, { createContext, useState, useEffect } from 'react';
// import { lightTheme, darkTheme } from './theme';

// const ThemeContext = createContext(lightTheme);

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(lightTheme);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setTheme(darkTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === lightTheme ? darkTheme : lightTheme);
//     localStorage.setItem('theme', theme === lightTheme ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };

import React, { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext(lightTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme', theme === lightTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };