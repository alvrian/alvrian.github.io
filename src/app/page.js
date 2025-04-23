"use client";

import "./home.css";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="mainPage" style = {{height: "70vh"}}>
      <div className="toggle" >
        <label className="theme-switch" style={{ marginTop: "2rem" }}>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div style = {{display: "flex", flexDirection: "row", height : "100%", margin: '1rem 0'}}>
        <div style = {{width: "50%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h2>Alvrian Timotius</h2>
        </div>
        <div style = {{width: "50%", height: "100%", textAlign: "right", padding: "1rem"}}>
          <p>
            Hello, 
          </p>
        </div> 
      </div>
    </div>
  );
}
