import { useState } from 'react';
import './App.css';
import InnerMainComponent from './Components/InnerMainComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSun, faMoon, faGears } from '@fortawesome/free-solid-svg-icons';

function App() {

  const dark = {
    background: "rgb(27, 27, 27)",
    color: "white",
    buttoncolor: "yellow"
  }

  const light = {
    background: "rgb(224, 224, 224)",
    color: "rgb(27, 27, 27)",
    buttoncolor: "gray"
  }

  const [theme, setTheme] = useState(dark);

  const [counter, setCounter] = useState(0);

  const [themeButton, setThemeButton] = useState(faSun);

  function themeFunction() {
    let incr = counter;

    if (counter % 2 === 0) {
      setTheme(light);
      setThemeButton(faMoon);
    }
    else {
      setTheme(dark);
      setThemeButton(faSun);
    }

    incr++;
    setCounter(incr);
  }

  return (
    <div style={{ backgroundColor: theme.background }} id='main'>
      <div id="headernav">
        <span style={{ color: theme.color }}><span><FontAwesomeIcon icon={faGears} />Moving-</span>Cranks</span>
        <button style={{ color: theme.buttoncolor }} onClick={() => { themeFunction(); }}><FontAwesomeIcon icon={themeButton} /></button>
      </div>
      <InnerMainComponent counter={counter} />
      <div id="footer">
        <h2 style={{ color: theme.color, fontWeight: "normal" }}>
          <span style={{fontWeight: "bold"}}><FontAwesomeIcon icon={faGears} />Moving-</span>Cranks
        </h2>
        <div>
          <p style={{ color: theme.color }}>
            Mail Us: <a style={{ color: theme.color }} href='mailto:aadill0104@gmail.com'>aadill0104@gmail.com</a>
          </p>
          <p style={{ color: theme.color }}>
            Call Us: <a style={{ color: theme.color }} href='tel:+919891452650' >+91-9891452650</a>
          </p>
        </div>
        <p style={{ color: theme.color }}>
          Copyright<sup>&copy;</sup>All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default App;
