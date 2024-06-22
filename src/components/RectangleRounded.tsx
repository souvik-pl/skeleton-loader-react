import React from "react";
import { SKELETON_BG_ANIMATION, SKELETON_BG_COLOR } from "../common/common";
import { RectangleRoundedProps } from "../types/RectangleRoundedProps.type";

function RectangleRounded(props: RectangleRoundedProps) {
  const DEFAULT_STYLES = {
    width: "100%",
    height: "20px",
    borderRadius: "8px",
    animation: "none",
  };

  return (
    <div
      style={{
        width: props.width || DEFAULT_STYLES.width,
        height: props.height || DEFAULT_STYLES.height,
        borderRadius: props.borderRadius || DEFAULT_STYLES.borderRadius,
        backgroundColor: SKELETON_BG_COLOR,
        animation: props.animated ? SKELETON_BG_ANIMATION : DEFAULT_STYLES.animation,
      }}
    ></div>
  );
}

export default RectangleRounded;
