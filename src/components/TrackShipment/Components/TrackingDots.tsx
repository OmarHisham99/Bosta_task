import React from "react";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";
import type { StepsProps } from "antd";

const TrackingDots: StepsProps["progressDot"] = (dot, { status, index }) => {
  const isDone = status === "finish";

  const getIcon = () => {
    if (isDone) {
      return <CheckCircleFilled style={{ fontSize: "30px" }} />;
    }
    // Add more icons based on index or other conditions
    return null;
  };

  const icon = getIcon();

  return <span>{icon ? icon : dot}</span>;
};

export default TrackingDots;
