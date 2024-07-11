import React from "react";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";
import type { StepsProps } from "antd";

const TrackingDots: StepsProps["progressDot"] = (dot, { status, index }) => {
  const isDone = status === "finish";

  const getIcon = () => {
    if (index === 0 && isDone) {
      return <CheckCircleFilled style={{ fontSize: "30px" }} />;
    } else if (index === 1 && isDone) {
      return <CheckCircleFilled style={{ fontSize: "30px" }} />;
    }
    if (index === 2 && isDone) {
      return <CheckCircleFilled style={{ fontSize: "30px" }} />;
    }
    if (index === 3 && isDone) {
      return <CheckCircleFilled style={{ fontSize: "30px" }} />;
    }
    return dot;
  };

  const icon = getIcon();

  return <span>{icon}</span>;
};

export default TrackingDots;
