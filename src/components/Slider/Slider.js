import React, { useEffect, useState } from "react";
import mc from "../../img/mc.png";
import hyper from "../../img/hyper.png";
import puma from "../../img/puma.png";
import "./style.scss";
import Slide from "./components/Slide";
import { connect } from "react-redux";
import { GetSettings } from "./actions";
import { Spinner, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { GetPhotos } from "../Config/actions";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function Slider(props) {
  const { GetSettings, settings, id, photos, GetPhotos } = props;
  useEffect(() => {
    GetSettings(id);
    GetPhotos(id);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!photos.load ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner color="primary" style={{ width: 150, height: 150 }} />
        </div>
      ) : (
        <div
          className="twitch_slider_box_pos"
          style={{
            width: `${settings.slider_width}%`,
            height: `${settings.slider_height}%`,
            paddingLeft: `${settings.slider_left}%`,
            paddingTop: `${settings.slider_top}%`,
          }}
        >
          <div
            className="slider_prop"
            style={
              settings.proportions == "free"
                ? {
                    width: "100%",
                    height: "100%",
                  }
                : settings.proportions == "1x1"
                ? { width: "100%", paddingTop: "100%" }
                : settings.proportions == "16x9"
                ? { width: "100%", paddingTop: "56.25%" }
                : settings.proportions == "4x3"
                ? { width: "100%", paddingTop: "75%" }
                : settings.proportions == "3x2"
                ? { width: "100%", paddingTop: "66.66%" }
                : { width: "100%", height: "100%" }
            }
          >
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={settings.timer * 1000}
              bullets={false}
              organicArrows={false}
              buttons={false}
            >
              {photos.items.map((item) => (
                <div className="img_box">
                  <a href={item.href} target="_blanc" className="a_box">
                    <img src={item.url} alt={item.name} />
                  </a>
                </div>
              ))}
            </AutoplaySlider>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  settings: state.settings,
  photos: state.photos,
});

const mapDispatchToProps = { GetSettings, GetPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
