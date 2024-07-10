import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/TrackingStatus.css";
import { Divider } from "antd";
import TrackingStatus from "./TrackingStatus";

const TrackingDetails: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="shipmentStatusContainer">
      <div className="shipmentDetails">
        <div>
          {t("Shipment_Number")}
          <p>Shipment Delivered</p>
        </div>
        <div>
          {t("Last_Update")}
          <p>Shipment Delivered</p>
        </div>
        <div>
          {t("Provider_Name")}
          <p>Shipment Delivered</p>
        </div>
        <div>
          {t("Delivery_time_within")}
          <p>Shipment Delivered</p>
        </div>
      </div>
      <Divider />
      <div>
        <TrackingStatus />
      </div>
    </div>
  );
};

export default TrackingDetails;
