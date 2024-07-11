import "./App.css";
import "./index.css";
import "./output.css";
import "./styles/fonts.css";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import { useEffect } from "react";
import TrackingDetails from "./components/TrackingDetails";
import ShipmentTimeline from "./components/ShipmentTimeline";
import { Col, Row } from "antd";
import ShipmentAddress from "./components/ShipmentAddress";
import { useAppSelector } from "./store/hooks/hooks";

function App() {
  // *************** i18n ***************
  const { i18n } = useTranslation();
  //**************** UseEffect *************/
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <TrackingDetails />
        <Row gutter={[16, 16]} justify="center" className="width-max">
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <div className="shipmentTimeline">
              <ShipmentTimeline />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="shipmentFeedback">
              <ShipmentAddress />
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
