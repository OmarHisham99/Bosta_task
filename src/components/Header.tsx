// import bosta_logo from "../assets/images/bosta_logo.svg";
// import bosta_logo_ar from "../assets/images/bosta_logo_ar.svg";
// import { useTranslation } from "react-i18next";
// import "../styles/Header.css";
// import LanguageSwitcher from "./languageSelector";
// import { Popover } from "antd";
// import TrackShipments from "./TrackShipments";

// const Header: React.FC = () => {
//   const { t, i18n } = useTranslation();

//   const getLogo = () => {
//     const lang = i18n.language || "en"; // Default language if undefined
//     return lang === "ar" ? bosta_logo_ar : bosta_logo;
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={getLogo()} alt="logo" />
//       </div>
//       <div className="middle_section">
//         <a className="navbar_link">{t("Home")}</a>
//         <a className="navbar_link">{t("Prices")}</a>
//         <a className="navbar_link">{t("Call_Sales")}</a>
//       </div>
//       <div className="right_section">
//         <Popover placement="bottom" arrow={false} content={<TrackShipments />}>
//           <a className="navbar_link">{t("Track_Shipment")}</a>
//         </Popover>
//         <a className="navbar_link">{t("Sign_In")}</a>
//         <a className="navbar_link language-switch">
//           <LanguageSwitcher></LanguageSwitcher>
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";
import { useTranslation } from "react-i18next";
import bosta_logo from "../assets/images/bosta_logo.svg";
import bosta_logo_ar from "../assets/images/bosta_logo_ar.svg";
import "../styles/Header.css";
import TrackShipments from "./TrackShipments";
import LanguageSwitcher from "./languageSelector";
import { Popover } from "antd";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Header() {
  const { t, i18n } = useTranslation();

  const getLogo = () => {
    const lang = i18n.language || "en"; // Default language if undefined
    return lang === "ar" ? bosta_logo_ar : bosta_logo;
  };
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <bosta_logo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <img src={getLogo()} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="navbar_link" color="foreground" href="#">
            {t("Home")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="navbar_link"
            color="foreground"
            href="#"
            aria-current="page"
          >
            {t("Prices")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar_link" color="foreground" href="#">
            {t("Call_Sales")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Popover placement="bottom" arrow={false} content={<TrackShipments />}>
          <NavbarItem className="hidden lg:flex">
            <Link className="navbar_link" color="foreground">
              {t("Track_Shipment")}
            </Link>
          </NavbarItem>
        </Popover>
        <NavbarItem>
          <a className="navbar_link">{t("Sign_In")}</a>
        </NavbarItem>
        <NavbarItem className="language-switch">
          <a>
            <LanguageSwitcher></LanguageSwitcher>
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
