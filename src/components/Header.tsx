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

import bosta_logo from "../assets/images/bosta_logo.svg";
import bosta_logo_ar from "../assets/images/bosta_logo_ar.svg";

export default function Header() {
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
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
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
