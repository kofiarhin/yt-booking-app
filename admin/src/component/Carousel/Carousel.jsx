import { useEffect, useState } from "react";
import "./carousel.styles.scss";
import { current } from "@reduxjs/toolkit";
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (prevState == data.length - 1) {
          return (prevState = 0);
        } else {
          return prevState + 1;
        }
      });

      return () => {
        clearInterval(interval);
      };
    }, 8000);
  }, []);

  return (
    <div className="carousel-wrapper">
      <img src={data[currentIndex]} />
    </div>
  );
};

export default Carousel;
