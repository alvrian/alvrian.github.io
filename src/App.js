import { useEffect, useState } from 'react';
import './App.css';
import SunIcon from "./assets/sun.svg";
import  MoonIcon from "./assets/moon.svg"

function App() {
  const [lightMode, setLightMode] = useState(false);
  
  useEffect(() => {
    if(lightMode){
      document.body.classList.add("light-mode");
    }else{
      document.body.classList.remove("light-mode")
    }
  }, [lightMode]);

  return (
    <div className="App">
      <div className='snap-section'>
        <div className='header'>
            <label className="switch">
              <input type="checkbox" checked={!lightMode} onChange={() => setLightMode(!lightMode)}/>
              <span className="slider"></span>
            </label>
            <span className="mode-icon">
              <img 
                key={lightMode ? "sun" : "moon"} src={lightMode ? SunIcon : MoonIcon} 
                alt={lightMode ? "Sun" : "Moon"} className="mode-icon"
              />
            </span>
          </div>
          <h2 className='mainText'>Alvrian Timotius</h2>
      </div>
      <div className='snap-section'>
        <div className='header'>
            <label className="switch">
              <input type="checkbox" checked={!lightMode} onChange={() => setLightMode(!lightMode)}/>
              <span className="slider"></span>
            </label>
            <span className="mode-icon">
              <img 
                key={lightMode ? "sun" : "moon"} src={lightMode ? SunIcon : MoonIcon} 
                alt={lightMode ? "Sun" : "Moon"} className="mode-icon"
              />
            </span>
          </div>
          <h2 className='mainText'>Alvrian Timotius</h2>
      </div>
    </div>
  );
}

export default App;
