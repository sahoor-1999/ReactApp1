import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [modeValue, setModeValue] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message, 
          type: type
        })
        setTimeout(()=>{
          setAlert(null)
        }, 1000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      setModeValue('Enable Light Mode');
      showAlert("Dark mode enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      setModeValue('Enable Dark Mode');
      showAlert("Light mode enable", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" aboutUs="About Us" home="Home" mode={mode} modeValue={modeValue} changeMode={toggleMode}/>
        
        <div className="container">
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm header="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
          
        </div>
        <Alert alert={alert} />
          </Router>
    </>
  );
}

export default App;
