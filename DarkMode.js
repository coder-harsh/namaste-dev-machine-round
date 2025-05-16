import React, { useEffect, useState } from 'react';
import './styles.css'

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toogleDark = () => {
    return setDarkMode(!isDarkMode)
  }
  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toogleDark} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
