import React from "react";
import { SKELETON_BG_ANIMATION, SKELETON_BG_COLOR } from "../common/common";
import { RectangleProps } from "../types/ReactangleProps.type";

function Rectangle(props: RectangleProps) {
  const DEFAULT_STYLES = {
    width: "100%",
    height: "20px",
    animation: "none",
  };

  return (
    <div
      style={{
        width: props.width || DEFAULT_STYLES.width,
        height: props.height || DEFAULT_STYLES.height,
        backgroundColor: SKELETON_BG_COLOR,
        animation: props.animated ? SKELETON_BG_ANIMATION : DEFAULT_STYLES.animation,
      }}
    ></div>
  );
}

export default Rectangle;
