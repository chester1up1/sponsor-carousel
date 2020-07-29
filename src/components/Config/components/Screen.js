import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./style.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Screen(props) {
  const {
    size_width,
    size_height,
    size_left,
    size_top,
    proportions,
    data,
    timer,
  } = props;

  // useEffect(() => {
  //   setPhotos(data);
  //   console.log("data", data);
  // }, [data]);
  const test_data = data;
  useEffect(() => {
    console.log("tyt->", test_data);
  }, []);
  return (
    <div className="bg_wind">
      <div className="wind">
        <div
          style={{
            width: `${size_width}%`,
            height: `${size_height}%`,
            boxSizing: " content-box",
            paddingLeft: `${size_left}%`,
            paddingTop: `${size_top}%`,
          }}
        >
          <div
            className="box_sider"
            style={
              proportions == "free"
                ? {
                    width: "100%",
                    height: "100%",
                  }
                : proportions == "1x1"
                ? { width: "100%", paddingTop: "100%" }
                : proportions == "16x9"
                ? { width: "100%", paddingTop: "56.25%" }
                : proportions == "4x3"
                ? { width: "100%", paddingTop: "75%" }
                : proportions == "3x2"
                ? { width: "100%", paddingTop: "66.66%" }
                : { width: "100%", height: "100%" }
            }
          >
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={timer * 1000}
              bullets={false}
              organicArrows={false}
              buttons={false}
            >
              {data.map((item) => {
                console.log("item", item, "data", data);
                return (
                  <div className="img_box">
                    <a href={item.href} target="_blanc" className="a_box">
                      <img src={item.url} alt={item.name} />
                    </a>
                    {/* {item.src} */}
                  </div>
                );
              })}
            </AutoplaySlider>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="img_box">
                  <a
                    href="http://htmlbook.ru/html/input/disabled"
                    target="_blanc"
                    className="a_box"
                  >
                    <img src={item.url} alt={item.name} />
                  </a>
                </div> */
}
