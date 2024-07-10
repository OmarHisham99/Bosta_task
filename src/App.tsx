import "./App.css";
import "./index.css";
import "./output.css";
import "./styles/fonts.css";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  // *************** i18n ***************
  const { i18n } = useTranslation();
  //**************** UseEffect *************/
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="App">
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
