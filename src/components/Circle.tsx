import React from "react";
import { SKELETON_BG_COLOR, SKELETON_BG_ANIMATION } from "../common/common";
import { CircleProps } from "../types/CircleProps.type";

function Circle(props: CircleProps) {
  const DEFAULT_STYLES = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    animation: "none",
  };

  return (
    <div
      style={{
        width: props.width || DEFAULT_STYLES.width,
        height: props.height || DEFAULT_STYLES.height,
        borderRadius: DEFAULT_STYLES.borderRadius,
        backgroundColor: SKELETON_BG_COLOR,
        animation: props.animated ? SKELETON_BG_ANIMATION : DEFAULT_STYLES.animation,
      }}
    ></div>
  );
}

export default Circle;
