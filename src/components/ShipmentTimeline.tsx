import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/hooks/hooks";
import { TransitEvent } from "../Typings/TrackingInfo";
import { formatTime } from "../utils/helpers";

interface DataSource {
  key: string;
  branch?: string;
  details?: string;
  time: string;
}

const ShipmentTimeline: React.FC = () => {
  const { t, i18n } = useTranslation();
  const trackingData = useAppSelector(
    (state) => state.tracking.trackingInfoData
  );
  const [data, setData] = useState<DataSource[]>([]);

  useEffect(() => {
    if (trackingData) {
      setData(adjustData(trackingData.TransitEvents));
    }
  }, [trackingData, i18n.language]);

  const adjustData = (data: TransitEvent[]): DataSource[] => {
    return data
      .map((event, index) => {
        if (!event.hub) {
          return {
            key: String(index),
            time: event.timestamp,
          };
        }
        return {
          key: String(index),
          branch: event.hub,
          details: t(event.state),
          time: formatTime(event.timestamp, i18n.language),
          date: event.timestamp.split("T")[0],
        };
      })
      .filter((event) => event.branch); // Filter out events without a branch
  };

  const columns = [
    {
      title: t("Branch"),
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: t("Date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("Time"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t("Details"),
      dataIndex: "details",
      key: "details",
    },
  ];

  return (
    <div className="w-100 tableContainer">
      <h3>{t("Shipment_Details")}</h3>
      <Table
        pagination={false}
        scroll={{ y: 200 }}
        dataSource={data}
        columns={columns}
        className="w-100 font-cairo"
      />
    </div>
  );
};

export default ShipmentTimeline;
