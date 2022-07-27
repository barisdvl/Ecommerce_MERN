import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

import "./slider.css";
import { sliderItems } from "../../data";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-arrow left">
          <ArrowLeftOutlined onClick={() => handleClick("left")} />
        </div>
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        >
          {sliderItems.map((item) => (
            <div
              className="slider-slide"
              style={{ backgroundColor: `#f5fafd`}}
              key={item.id}
            >
              <div className="slider-imgContainer">
                <img className="slider-image" src={item.img} alt="slider" />
              </div>
              <div className="slider-infoContainer">
                <h1 className="slider-title">{item.title}</h1>
                <p className="slider-detail">{item.desc}</p>
                <button className="slider-button">SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-arrow right">
          <ArrowRightOutlined onClick={() => handleClick("right")} />
        </div>
      </div>
    </div>
  );
}
