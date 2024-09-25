import React from "react";
import logo from "../Assets/IMGS/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const { t, i18n } = useTranslation("nav");
  return (
    <div className="m-auto w-[90%] my-8">
      <div className="hidden items-center justify-between lg:flex text-black dark:text-White">
        <img src={logo} alt="Logo del CTP Santo Domingo" className="w-[7%]" />
        <div className="flex gap-12">
          <ul className="m-auto hidden items-center justify-center py-10 font-Poppins md:flex md:flex-wrap lg:w-[100%] lg:gap-4">
            <li>
              <Link
                to="/"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("Home")}
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("AU")}
              </Link>
            </li>
            <li>
              <Link
                to="/Events"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("Events")}
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("Services")}
              </Link>
            </li>
            <li>
              <Link
                to="/Posts"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("Posts")}
              </Link>
            </li>

            <li>
              <Link
                to="#Contact"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("Contact")}
              </Link>
            </li>

            <li>
              <Link
                to="/UP"
                className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl"
              >
                {t("UP")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="hidden md:my-4 md:border-2 lg:block lg:border-Atlantis" />
        <p className="hidden md:mb-4 md:text-center md:text-xl lg:block">
          &copy; {year} CTP Santo Domingo de Heredia
        </p>
      </div>

      <div className="lg:hidden">
        <div className="flex items-center justify-center gap-4 text-black dark:text-White">
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
        <p className="mb-4 text-center text-xl text-black dark:text-White">
          &copy; {year} CTP Santo Domingo de Heredia
        </p>
      </div>
    </div>
  );
}
