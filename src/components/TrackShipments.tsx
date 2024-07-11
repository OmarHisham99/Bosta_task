import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Space } from "antd";
import searchIcon from "../assets/images/searchIcon.svg";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchTrackingData } from "../store/Tracking/TrackingSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

const TrackShipments: React.FC = () => {
  // *************** i18n ***************
  const { t, i18n } = useTranslation();
  // *************** States ***************
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  // *************** Redux ***************
  const dispatch = useAppDispatch();
  // *************** Functions ***************
  const handleSearch = () => {
    if (trackingNumber) {
      let lang = i18n.language;
      dispatch(fetchTrackingData({ trackingNumber, lang }));
    }
  };
  return (
    <div>
      <span>
        <h5 className="title">{t("Track_Your_Shipment")}</h5>
      </span>
      <div>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder={t("Tracking_Number")}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <span>
            <Button className="searchBtn" onClick={handleSearch}>
              <img src={searchIcon} />
            </Button>
          </span>
        </Space.Compact>
      </div>
    </div>
  );
};

export default TrackShipments;
