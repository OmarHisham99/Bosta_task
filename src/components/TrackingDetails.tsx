import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/TrackingDetails.css";
import { Divider } from "antd";
import TrackingStatus from "./TrackShipment/TrackingStatus";
import { TrackingInfo } from "../Typings/TrackingInfo";
import { useAppSelector } from "../store/hooks/hooks";
import { getCurrentStateColor } from "../utils/tracking";
import { formatDateTime } from "../utils/helpers";

const TrackingDetails: React.FC = () => {
  // *************** i18n ***************
  const { t } = useTranslation();
  // *************** Redux ***************
  const trackingData: TrackingInfo | null = useAppSelector(
    (state) => state.tracking.trackingInfoData
  );
  const currentStatusTitle = trackingData?.CurrentStatus?.state
    ? t(trackingData.CurrentStatus.state)
    : ""; // Fallback in case of undefined state

  const currentStateColor = getCurrentStateColor(trackingData);
  return (
    <div className="shipmentStatusContainer">
      <div className="shipmentDetails">
        <div>
          <p className="headLine">
            {t("Shipment_Number")} {trackingData?.TrackingNumber}
          </p>
          <p style={{ color: currentStateColor }}>{currentStatusTitle}</p>
        </div>
        <div>
          <p className="headLine">{t("Last_Update")}</p>
          <p>{formatDateTime(trackingData?.CurrentStatus.timestamp)}</p>
        </div>
        <div>
          <p className="headLine">{t("Provider_Name")}</p>
          <p>{trackingData?.provider}</p>
        </div>
        <div>
          <p className="headLine">{t("Delivery_time_within")}</p>
          <p>{formatDateTime(trackingData?.PromisedDate)}</p>
        </div>
      </div>
      <Divider />
      <div>
        <TrackingStatus trackingData={trackingData} />
      </div>
    </div>
  );
};

export default TrackingDetails;
