import React from "react";
import logo from "../Assets/IMGS/logo.png";
import { useTranslation } from "react-i18next";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const { t, i18n } = useTranslation("nav");
  return (
    <div className="m-auto w-[90%]">
      <div className="hidden items-center justify-between lg:flex">
        <img src={logo} alt="Logo del CTP Santo Domingo" className="w-[7%]" />
        <div className="flex gap-12">
          <a
            href="/"
            className="rounded-lg p-2 text-lg transition-all duration-200 lg:text-xl lg:hover:scale-90 lg:hover:bg-Atlantis lg:hover:text-White"
          >
            {t("Home")}
          </a>
          <a
            href="#About-us"
            className="rounded-lg p-2 text-lg transition-all duration-200 lg:text-xl lg:hover:scale-90 lg:hover:bg-Atlantis lg:hover:text-White"
          >
            {t("AU")}
          </a>
          <a
            href="/Posts"
            className="rounded-lg p-2 text-lg transition-all duration-200 lg:text-xl lg:hover:scale-90 lg:hover:bg-Atlantis lg:hover:text-White"
          >
            {t("Posts")}
          </a>
          <a
            href="#Contact"
            className="rounded-lg p-2 text-lg transition-all duration-200 lg:text-xl lg:hover:scale-90 lg:hover:bg-Atlantis lg:hover:text-White"
          >
            {t("Contact")}
          </a>
          <a
            href="/Events"
            className="rounded-lg p-2 text-lg transition-all duration-200 lg:text-xl lg:hover:scale-90 lg:hover:bg-Atlantis lg:hover:text-White"
          >
            {t("Events")}
          </a>
        </div>
      </div>
      <div>
        <hr className="hidden md:my-4 md:border-2 lg:block lg:border-Atlantis" />
        <p className="hidden md:mb-4 md:text-center md:text-xl lg:block">
          &copy; {year} CTP Santo Domingo de Heredia
        </p>
      </div>

      <div className="lg:hidden">
        <div className="flex items-center justify-center gap-4">
          <img
            src={logo}
            alt="Logo del CTP Santo Domingo"
            className="w-[15%]"
          />
          <h1 className="w-1/2 text-2xl md:text-lg">
            Colegio Técnico Profesional de Santo Domingo
          </h1>
        </div>
        <hr className="my-4 border-2 border-Atlantis" />
        <p className="mb-4 text-center text-xl">
          &copy; {year} CTP Santo Domingo de Heredia
        </p>
      </div>
    </div>
  );
}
