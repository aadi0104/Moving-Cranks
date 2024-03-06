import React, { useEffect, useState, useRef } from "react";
import PopularCarSlider from "./CarSlider/PopularCarSlider";

function PopularCarComponent(props) {

  const suv = useRef(null);
  const hatchback = useRef(null);
  const muv = useRef(null);
  const sedan = useRef(null);
  const luxury = useRef(null);

  const dark = {
    background: "white",
    color: "white",
  }

  const light = {
    background: "rgb(67, 67, 67)",
    color: "rgb(27, 27, 27)",
  }

  const [theme, setTheme] = useState(dark);

  const [category, setCategory] = useState("SUV");

  useEffect(() => {
    if (props.counter % 2 !== 0) {
      setTheme(light);
    }
    else {
      setTheme(dark);
    }
  }, [props.counter, light, dark]);

  function handleBorder(mode) {
    if(mode==="SUV"){
      suv.current.style.borderBottom = `2px solid ${theme.color}`;
      hatchback.current.style.borderBottom = "none";
      muv.current.style.borderBottom = "none";
      sedan.current.style.borderBottom = "none";
      luxury.current.style.borderBottom = "none";
    }
    else if(mode==="Hatchback"){
      suv.current.style.borderBottom = "none";
      hatchback.current.style.borderBottom = `2px solid ${theme.color}`;
      muv.current.style.borderBottom = "none";
      sedan.current.style.borderBottom = "none";
      luxury.current.style.borderBottom = "none";
    }
    else if(mode==="MUV"){
      suv.current.style.borderBottom = "none";
      hatchback.current.style.borderBottom = "none";
      muv.current.style.borderBottom = `2px solid ${theme.color}`;
      sedan.current.style.borderBottom = "none";
      luxury.current.style.borderBottom = "none";
    }
    else if(mode==="Sedan"){
      suv.current.style.borderBottom = "none";
      hatchback.current.style.borderBottom = "none";
      muv.current.style.borderBottom = "none";
      sedan.current.style.borderBottom = `2px solid ${theme.color}`;
      luxury.current.style.borderBottom = "none";
    }else{
      suv.current.style.borderBottom = "none";
      hatchback.current.style.borderBottom = "none";
      muv.current.style.borderBottom = "none";
      sedan.current.style.borderBottom = "none";
      luxury.current.style.borderBottom = `2px solid ${theme.color}`;
    }
  }

  return (
    <div id="popularcars">
        <h2 style={{color: theme.color}}>
            Popular Cars
        </h2>
        <div>
            <button ref={suv} onClick={()=>{ setCategory("SUV"); handleBorder("SUV"); }} style={{color: theme.color, borderBottom: `2px solid ${theme.color}`}}>SUV</button>
            <button ref={hatchback} onClick={()=>{ setCategory("Hatchback"); handleBorder("Hatchback"); }} style={{color: theme.color}}>Hatchback</button>
            <button ref={muv} onClick={()=>{ setCategory("MUV"); handleBorder("MUV"); }} style={{color: theme.color}}>MUV</button>
            <button ref={sedan} onClick={()=>{ setCategory("Sedan"); handleBorder("Sedan"); }} style={{color: theme.color}}>Sedan</button>
            <button ref={luxury} onClick={()=>{ setCategory("Luxury"); handleBorder("Luxury"); }} style={{color: theme.color}}>Luxury</button>
        </div>
        <div className="p-2 my-3" style={{border: `2px solid ${theme.color}`, borderRadius: "10px"}}>
            <PopularCarSlider category = {category} />
        </div>
    </div>
  );
}

export default PopularCarComponent;