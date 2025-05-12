// src/App.js
import React from "react";
import Event from "../event-page/Event";
import About from '../about-page/About'
import './style.css'

export default function App() {
  return (
    <div>
      <div></div>
        <About />
    <div className="event">
        <Event />
    </div>
    </div>
  )
}

