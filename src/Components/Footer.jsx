import React from "react";
import logo from "../Assets/IMGS/logo.png";
import { useTranslation } from "react-i18next";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const { t, i18n } = useTranslation("nav");
  return (
    <div>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo del CTP Santo Domingo" className="w-[7%]" />
        <div className="flex gap-12">
          <a
            href="/"
            className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Home")}
          </a>
          <a
            href="#About-us"
            className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("AU")}
          </a>
          <a
            href="/Posts"
            className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Posts")}
          </a>
          <a
            href="#Contact"
            className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Contact")}
          </a>
          <a
            href="/Events"
            className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
          >
            {t("Events")}
          </a>
        </div>
      </div>
      <hr  className="border-Atlantis border-2 my-4"/>
      <p className="text-xl text-center mb-4">&copy; {year} CTP Santo Domingo de Heredia</p>
    </div>
  );
}
