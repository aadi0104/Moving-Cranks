import React from "react";

import { useState, useEffect } from "react";
import BrandSlider from "./CarSlider/BrandSlider";

function BrandComponent(props) {

    const dark = {
        background: "white",
        color: "white",
      }
    
      const light = {
        background: "rgb(67, 67, 67)",
        color: "rgb(27, 27, 27)",
      }
    
      const [theme, setTheme] = useState(dark);
    
      useEffect(() => {
        if (props.counter % 2 !== 0) {
          setTheme(light);
        }
        else {
          setTheme(dark);
        }
      }, [props.counter, light, dark]);
    
    

    return (
        <div id="popularcars">
            <h2 style={{ color: theme.color }}>
                Popular Brands
            </h2>
            <div className="p-1 my-3" style={{ border: `2px solid ${theme.color}`, borderRadius: "10px" }}>
                <BrandSlider />
            </div>
        </div>
    );
}

export default BrandComponent;