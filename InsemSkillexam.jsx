import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        body.light {
          background-color: white;
          color: black;
          transition: background-color 0.3s, color 0.3s;
        }
        body.dark {
          background-color: #121212;
          color: white;
          transition: background-color 0.3s, color 0.3s;
        }
        button {
          padding: 10px 20px;
          margin: 20px;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          transition: background-color 0.3s, color 0.3s;
        }
        body.light button {
          background-color: #eee;
          color: #333;
        }
        body.dark button {
          background-color: #333;
          color: #fff;
        }
      `}</style>

      {/* Toggle Button */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </>
  );
}

export default ThemeToggle;
