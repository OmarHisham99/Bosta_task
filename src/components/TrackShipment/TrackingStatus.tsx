import React, { useEffect, useState } from "react";
import { ConfigProvider, Steps } from "antd";
import TrackingDots from "./Components/TrackingDots";
import { TrackingInfo } from "../../Typings/TrackingInfo";
import { getCurrentStep } from "../../utils/tracking";
import { useTranslation } from "react-i18next";
import Truck from "../../assets/icons/truck.svg";
interface TrackingStatusProps {
  trackingData: TrackingInfo | null; // Define the type of trackingData
}

const TrackingStatus: React.FC<TrackingStatusProps> = ({ trackingData }) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  useEffect(() => {
    setCurrentStep(getCurrentStep(trackingData));
  }, [trackingData]);

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "Red" },
        components: {
          Steps: {
            dotSize: 30,
          },
        },
      }}
    >
      <Steps className="steps" current={currentStep} progressDot={TrackingDots}>
        <Steps.Step subTitle={t("TICKET_CREATED")} />
        <Steps.Step subTitle={t("PACKAGE_RECEIVED")} />
        <Steps.Step subTitle={t("OUT_FOR_DELIVERY")} />
        <Steps.Step subTitle={t("DELIVERED")} />
      </Steps>
    </ConfigProvider>
  );
};

export default TrackingStatus;
