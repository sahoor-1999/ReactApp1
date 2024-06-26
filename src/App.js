import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


function App() {

  const [mode, setMode] = useState('light');
  const [modeValue, setModeValue] = useState('Enable Dark Mode');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      setModeValue('Enable White Mode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= '#f0f5c4c9';
      setModeValue('Enable Dark Mode');
    }
  }

  return (
    <>
        <Navbar title="Text-Utils" aboutUs="About Us" home="Home" mode={mode} modeValue={modeValue} changeMode={toggleMode}/>
        <div className="container my-3" style={{backgroundColor: mode==='light'?"#f0f5c4c9":'#042743'}}>
          <TextForm header="Enter the text to analyze" mode={mode}/>
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
