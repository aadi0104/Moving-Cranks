import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import PopularCarComponent from "./PopularCarComponent";
import BrandComponent from "./BrandComponent";

function InnerMainComponent(props) {

  const dark = {
    background: "white",
    color: "rgb(23, 23, 23)",
  }

  const light = {
    background: "rgb(67, 67, 67)",
    color: "white",
  }

  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    if (props.counter % 2 === 0) {
      setTheme(light);
    }
    else {
      setTheme(dark);
    }
  }, [props.counter, light, dark]);


  return (
    <div id="innermaincomponent" className="mx-1" style={{ backgroundColor: theme.background }}>
      <CarouselComponent />
      <PopularCarComponent counter={props.counter} />
      <BrandComponent counter={props.counter} />
      <p style={{ color: theme.color, fontWeight: "normal" }}><span style={{fontWeight: "bold"}}>Note: </span>Not for commercial purpose.</p>
    </div>
  );
}

export default InnerMainComponent;