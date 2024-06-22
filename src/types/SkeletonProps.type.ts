import { CircleProps } from "./CircleProps.type";
import { RectangleProps } from "./ReactangleProps.type";
import { RectangleRoundedProps } from "./RectangleRoundedProps.type";

export type SkeletonProps =
  | ({
      variant: "rectangle";
    } & RectangleProps)
  | ({
      variant: "circle";
    } & CircleProps)
  | ({
      variant: "rectangle-rounded";
    } & RectangleRoundedProps);
