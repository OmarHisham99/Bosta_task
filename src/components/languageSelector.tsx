import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  //********************** i18n *****************/
  const { t, i18n } = useTranslation();
  //********************** States *****************/
  const [language, setLanguage] = useState<string>();

  //********************** useEffect ******************/
  useEffect(() => {
    setLanguage(i18n.language);
  }, []);
  //********************** Functions *****************/

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };
  const getLanguage = () => {
    return i18n.language;
  };

  return (
    <div>
      {getLanguage() === "en" ? (
        <span  onClick={() => changeLanguage("ar")}>عربي</span>
      ) : (
        <span onClick={() => changeLanguage("en")}>ENG</span>
      )}
    </div>
  );
};

export default LanguageSwitcher;
