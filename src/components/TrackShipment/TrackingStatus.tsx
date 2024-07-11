import React from "react";
import { Steps } from "antd";
import TrackingDots from "./Components/TrackingDots";
import { TrackingInfo } from "../../Typings/TrackingInfo";
import { getCurrentStep } from "../../utils/tracking";
import { useTranslation } from "react-i18next";

interface TrackingStatusProps {
  trackingData: TrackingInfo | null; // Define the type of trackingData
}

const TrackingStatus: React.FC<TrackingStatusProps> = ({ trackingData }) => {
  const { t } = useTranslation();

  const currentStep = getCurrentStep(trackingData);
  return (
    <Steps className="steps" current={currentStep} progressDot={TrackingDots}>
      <Steps.Step subTitle={t("TICKET_CREATED")} />
      <Steps.Step subTitle={t("PACKAGE_RECEIVED")} />
      <Steps.Step subTitle={t("OUT_FOR_DELIVERY")} />
      <Steps.Step subTitle={t("DELIVERED")} />
    </Steps>
  );
};

export default TrackingStatus;
