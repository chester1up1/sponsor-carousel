import React, { Component } from "react";
import { connect } from "react-redux";
import AddImgBtn from "./AddImgBtn";
import Gallery from "../Gallery";

export const ItemImg = (props) => {
  const { id, data } = props;
  return (
    <div className="item_img">
      <AddImgBtn id={id} />
      <Gallery data={data} id={id} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemImg);
