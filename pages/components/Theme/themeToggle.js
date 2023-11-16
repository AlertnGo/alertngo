import { IconMoon } from "@tabler/icons-react";
import React from "react";
import { useState, useEffect } from "react";

function Toggle() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      if (theme === false || localStorage.getItem("theme") === "true") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    checkTheme();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="themeToggler" onClick={toggleTheme}>
      <IconMoon size="1.5rem" stroke={1} color={theme ? "#fff" : "#000000"} />
    </div>
  );
}

export default Toggle;
