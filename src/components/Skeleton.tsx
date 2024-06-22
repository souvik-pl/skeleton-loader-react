import React from "react";
import { SkeletonProps } from "../types/SkeletonProps.type";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import RectangleRounded from "./RectangleRounded";

function Skeleton(props: SkeletonProps) {
  if (props.variant === "circle") return <Circle {...props} />;
  if (props.variant === "rectangle") return <Rectangle {...props} />;
  if (props.variant === "rectangle-rounded") return <RectangleRounded {...props} />;
}

export default Skeleton;
