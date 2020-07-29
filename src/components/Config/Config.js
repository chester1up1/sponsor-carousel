import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import tw1 from "../../img/tw1.jpg";
import tw2 from "../../img/tw2.jpg";
import tw3 from "../../img/tw3.jpg";
import tw4 from "../../img/tw4.jpg";
import { Input, Button } from "reactstrap";
import Screen from "./components/Screen";
import { postSettings, GetPhotos } from "./actions";
import { GetSettings } from "../Slider/actions";
import "react-awesome-slider/dist/styles.css";
import "./style.scss";
import ItemImg from "./components/ItemImg";
import { Spinner } from "reactstrap";
export function Config(props) {
  const { id, postSettings, GetSettings, settings, GetPhotos, photos } = props;
  const [size_window, setSizeWindow] = useState(false);
  const [size_width, setWidth] = useState(0);
  const [size_height, setHeight] = useState(0);
  const [proportions, setProportions] = useState("free");
  const [size_left, setLeft] = useState(0);
  const [size_top, setTop] = useState(0);
  const [timer, setTimer] = useState(5);
  const [data_, setData_] = useState([]);
  const changeProportions = (e) => {
    setProportions(e.target.value);
  };
  const changeWidth = (e) => {
    setWidth(e.target.value);
  };
  const changeTimer = (e) => {
    setTimer(e.target.value);
  };
  const changeHeight = (e) => {
    setHeight(e.target.value);
  };
  const changeLeft = (e) => {
    setLeft(e.target.value);
  };
  const changeTop = (e) => {
    setTop(e.target.value);
  };
  const addSettings = () => {
    let data = {
      proportions: proportions,
      slider_height: size_height,
      slider_left: size_left,
      slider_top: size_top,
      slider_width: size_width,
      id: id,
      timer: timer,
    };
    postSettings(id, data);
  };
  useEffect(() => {
    GetSettings(id);
    GetPhotos(id);
  }, []);
  useEffect(() => {
    if (settings.load) {
      setWidth(settings.slider_width);
      setHeight(settings.slider_height);
      setProportions(settings.proportions);
      setTop(settings.slider_top);
      setLeft(settings.slider_left);
      setTimer(settings.timer);
    }
    if (photos.load) {
      setData_(photos.items);
      console.log("photos.items", photos.items);
    }
  }, [settings.load, photos]);
  return (
    <div>
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
        <div className="tw">
          <div className="control_btn">
            <div className="proportions">
              <p className="title">proportions:</p>
              <div className="item_size_radio">
                <label for="free" className="pointer">
                  free resize
                </label>
                <Input
                  className="pointer"
                  type="radio"
                  name="2"
                  value={"free"}
                  id="free"
                  checked={proportions == "free" ? true : false}
                  onChange={changeProportions}
                />
              </div>
              <div className="item_size_radio">
                <label for="1x1" className="pointer">
                  1x1
                </label>
                <Input
                  className="pointer"
                  type="radio"
                  name="2"
                  value={"1x1"}
                  id="1x1"
                  checked={proportions == "1x1" ? true : false}
                  onChange={changeProportions}
                />
              </div>
              <div className="item_size_radio">
                <label for="16x9" className="pointer">
                  16x9
                </label>
                <Input
                  className="pointer"
                  type="radio"
                  name="2"
                  value={"16x9"}
                  id="16x9"
                  checked={proportions == "16x9" ? true : false}
                  onChange={changeProportions}
                />
              </div>
              <div className="item_size_radio">
                <label for="4x3" className="pointer">
                  4x3
                </label>
                <Input
                  className="pointer"
                  type="radio"
                  name="2"
                  value={"4x3"}
                  id="4x3"
                  checked={proportions == "4x3" ? true : false}
                  onChange={changeProportions}
                />
              </div>
              <div className="item_size_radio">
                <label for="3x2" className="pointer">
                  3x2
                </label>
                <Input
                  className="pointer"
                  type="radio"
                  name="2"
                  value={"3x2"}
                  id="3x2"
                  checked={proportions == "3x2" ? true : false}
                  onChange={changeProportions}
                />
              </div>
            </div>
            <div className="range_btn_control">
              <p className="title">img size:</p>
              <div className="item_size">
                <p>width:</p>
                <div className="proc">
                  <p>{size_width}%</p>
                  <p>100%</p>
                </div>
                <Input
                  className="pointer"
                  type="range"
                  name="range"
                  id="exampleRange"
                  min="0"
                  max="100"
                  step="1"
                  value={size_width}
                  onChange={changeWidth}
                />
              </div>
              <div className="item_size">
                <p>height:</p>
                <div className="proc">
                  <p>{size_height}%</p>
                  <p>100%</p>
                </div>
                <Input
                  disabled={proportions == "free" ? false : true}
                  className="pointer"
                  type="range"
                  name="range2"
                  id="exampleRange2"
                  min="0"
                  max="100"
                  step="1"
                  value={size_height}
                  onChange={changeHeight}
                />
              </div>
            </div>
            <div className="range_btn_control">
              <p className="title">position</p>
              <div className="item_size">
                <p>left:</p>
                <div className="proc">
                  <p>{size_left}%</p>
                  <p>100%</p>
                </div>
                <Input
                  className="pointer"
                  type="range"
                  name="range"
                  id="exampleRange"
                  min="0"
                  max="100"
                  step="1"
                  value={size_left}
                  onChange={changeLeft}
                />
              </div>
              <div className="item_size">
                <p>top:</p>
                <div className="proc">
                  <p>{size_top}%</p>
                  <p>100%</p>
                </div>
                <Input
                  className="pointer"
                  type="range"
                  name="range2"
                  id="exampleRange2"
                  min="0"
                  max="100"
                  step="1"
                  value={size_top}
                  onChange={changeTop}
                />
              </div>
            </div>
            <div className="range_btn_control">
              <p className="title">timer:</p>
              <div className="item_size">
                <p>sec for next slide:</p>
                <div className="proc">
                  <p>{timer}sec</p>
                  <p>30sec</p>
                </div>
                <Input
                  className="pointer"
                  type="range"
                  name="range"
                  id="exampleRange"
                  min="1"
                  max="30"
                  step="1"
                  value={timer}
                  onChange={changeTimer}
                />
              </div>
            </div>
            <div className="save_bnt">
              <Button color="primary" onClick={addSettings}>
                save
              </Button>
            </div>
          </div>
          <div className="right">
            <Screen
              size_window={size_window}
              setSizeWindow={setSizeWindow}
              size_width={size_width}
              size_height={size_height}
              size_left={size_left}
              size_top={size_top}
              proportions={proportions}
              data={photos.items}
              timer={timer}
            />
            <ItemImg id={id} data={data_} />
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

const mapDispatchToProps = {
  GetSettings,
  postSettings,
  GetPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);
