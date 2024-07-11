import React from "react";
import Icon from "@ant-design/icons";
import { ReactComponent as CircleCheck } from "../../../assets/images/Circle-check.svg";
import type { StepsProps } from "antd";
import { TIMELINE_STEPS } from "../../../Constants/Shipments";

const TrackingDots: StepsProps["progressDot"] = (dot, { status, index }) => {
  const isDone = status === TIMELINE_STEPS.DELIVERED;
  return (
    <span>
      {isDone ? <Icon component={CircleCheck} className="ant-icon-lg" /> : dot}
    </span>
  );
};

export default TrackingDots;
