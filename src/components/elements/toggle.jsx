import React, { useState } from "react";
import "./toggle.css";

const Switcher1 = ({ theme, setTheme }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    const new_theme = theme === "dark" ? "light" : "dark";
    console.group(new_theme);
    setTheme(new_theme);
  };

  return (
    <label className="toggle-label">
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="toggle-input"
        />
        <div className="toggle-background"></div>
        <div className="toggle-dot"></div>
      </div>
    </label>
  );
};

export default Switcher1;
