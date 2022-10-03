import { useState } from 'react'
import './AdDesigner.css';
import React from 'react';


export function AdDesign() {
    const [ flavor, setFlavor ] = useState<string>("");
    
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };
      
    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    const [fontSize, setFontSize] = useState(56);

    return <div className="AdDesigner">
        <div className="ad">
            <h1>Ad Designer</h1>
        </div>
        <div className="ad-container">
            <p className="for">Vote For</p>
            <p className="flavor" style={{fontSize: `${fontSize}px`}}>{flavor}</p>
        </div>
        <div>
            <h4>What to support:</h4>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        </div>
        <h4>Color Theme</h4>
        <div className="toggle-theme-wrapper">
            <button onClick={() => setLight()}>Light</button>
            <button onClick={() => setDark()}>Dark</button>
        </div>
        <h4>Font Size</h4>
        <div className="fontSizes">
            <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
            <p className="size">{fontSize}</p>
            <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        </div>
    </div>
}