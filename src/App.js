
import './App.css';

import React, { useState } from 'react'
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [cmode, setcmode] = useState('Enable dark mode');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  const handleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#486464';
      setcmode("disable dark mode");
      showAlert("Dark mode enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setcmode("Enable dark mode");
      showAlert("Light mode enabled", "success");

    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} handleMode={handleMode} cmode={cmode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path="/" element={<Textform mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
       

      </Router>
    </>
  );
}

export default App;
