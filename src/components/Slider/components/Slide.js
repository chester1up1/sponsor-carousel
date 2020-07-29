import React from "react";

export default function Slide(props) {
  const { src, id, alt, href, width, height } = props;
  return (
    <div className="img_box">
      <a href={href} target="_blanc" className="a_box">
        123
        <img src={src} alt="alt" />
      </a>
    </div>
  );
}
