import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import delete_ from "../../img/delete_.svg";
import { DeletePhoto } from "./actions";

export const Gallery = (props) => {
  const { data, DeletePhoto, id } = props;
  const [del_view, setDelView] = useState(999);

  return (
    <div className="gallery">
      {data.map((item, index) => (
        <div
          className="img_box"
          onMouseEnter={() => setDelView(index)}
          onMouseLeave={() => setDelView(999)}
        >
          <img src={item.url} alt={item.name} className="photo-img" />
          <img
            src={delete_}
            alt="delete"
            className="delete"
            style={{ display: index == del_view ? "" : "none" }}
            onClick={() => {
              DeletePhoto(id, item.name);
            }}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { DeletePhoto };

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
