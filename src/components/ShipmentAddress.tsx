import React from "react";
import { Card, Button, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import reportProblem from "../assets/images/reportProblem.svg";
import "../styles/ShipmentAddress.css";

const ShipmentAddress: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="shipment-address-card">
      <h3 className="title">{t("Delivery_Address")}</h3>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="address">
            <p>{t("Address")}</p>
          </div>
        </Col>
        <Col span={24}>
          <Card className="issue-card">
            <Row align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <img src={reportProblem} alt="report a problem" />
              </Col>
              <Col span={16}>
                <p className="questionText">
                  {t("Is there a problem with your shipment?!")}
                </p>
                <Button type="primary" danger className="report-button">
                  {t("Report a problem")}
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShipmentAddress;
