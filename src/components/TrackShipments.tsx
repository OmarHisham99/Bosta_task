import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Space } from "antd";
import searchIcon from "../assets/images/searchIcon.svg";
import "../styles/Header.css";
const TrackShipments: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <span>
        <h5 className="title">{t("Track_Your_Shipment")}</h5>
      </span>
      <div>
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder={t("Tracking_Number")} />
          <span>
            <Button className="searchBtn">
              <img src={searchIcon} />
            </Button>
          </span>
        </Space.Compact>
      </div>
    </div>
  );
};

export default TrackShipments;
