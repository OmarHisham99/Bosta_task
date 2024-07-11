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
} from "@nextui-org/react";

export default function Header() {
  const { t, i18n } = useTranslation();

  const getLogo = () => {
    const lang = i18n.language || "en"; // Default language if undefined
    return lang === "ar" ? bosta_logo_ar : bosta_logo;
  };
  const getLocaledNavItem = (item: string): string => {
    return t(item);
  };

  const menuItems = [
    "Home",
    "Prices",
    "Call_Sales",
    "Track_Shipment",
    "Sign_In",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <bosta_logo /> */}
          <img src={getLogo()} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <Bosta /> */}
          <img src={getLogo()} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
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

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
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
            <Link className="w-full" color={"foreground"} href="#" size="lg">
              {getLocaledNavItem(item as string)}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="language-switch">
          <LanguageSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
