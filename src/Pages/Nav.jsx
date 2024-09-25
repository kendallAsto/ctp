import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import enFlagIMG from "../Assets/Flags/en.png";
import esFlagIMG from "../Assets/Flags/es.png";
import dayjs from "dayjs";

export default function Nav() {
  const { t, i18n } = useTranslation("nav");
  const [idiomaActual, setIdiomaActual] = useState("es");
  const [estadoNav, setEstadoNav] = useState(false);
  const [estadoDropbox, setEstadoDropbox] = useState(false);
  const Language = i18n.language;
  function manejarEstadoDropbox() {
    setEstadoDropbox(!estadoDropbox);
  }

  function manejarEstadoNav() {
    setEstadoNav(!estadoNav);
  }

  function changeLanguage() {
    if (idiomaActual === "es") {
      i18n.changeLanguage("en");
      setIdiomaActual("en");
      dayjs.locale("en");
    } else {
      i18n.changeLanguage("es");
      setIdiomaActual("es");
      dayjs.locale("es");
    }
  }

  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="m-auto hidden items-center justify-center py-10 font-Poppins transition-all duration-200 dark:text-White lg:flex lg:w-[90%] lg:gap-4">
        <Link to="/" className="w-[10%]">
          <img src={Logo} alt="Logo del CTP Santo Domingo" />
          <esFlag1 />
        </Link>
        <ul className="m-auto hidden items-center justify-center py-10 font-Poppins md:grid md:grid-cols-4 lg:w-[80%] lg:gap-4">
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
          <li onClick={manejarEstadoDropbox} className="relative">
            <Link
              to="#"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:bg-Atlantis hover:text-White lg:text-xl"
            >
              {t("Coordinations.title")}
            </Link>

            {estadoDropbox && (
              <div className="lg:w-92 absolute right-0 z-50 my-4 lg:text-xl">
                <ul className="rounded-xl bg-Atlantis text-White">
                  <Link to="/CTechnical" className="flex cursor-pointer p-2">
                    {t("Coordinations.Technical")}
                  </Link>
                  <Link to="/CAcademic" className="flex cursor-pointer p-2">
                    {t("Coordinations.Academic")}
                  </Link>
                  <Link to="/CCompany" className="flex cursor-pointer p-2">
                    {t("Coordinations.Company")}
                  </Link>
                </ul>
              </div>
            )}
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

        <div
          onClick={handleChangeTheme}
          className="flex cursor-pointer justify-center gap-2 rounded-lg bg-Atlantis p-2 text-lg text-White"
        >
          {theme === "light" ? (
            <i class="fa-solid fa-moon text-2xl"></i>
          ) : (
            <i class="fa-regular fa-sun text-2xl"></i>
          )}
        </div>

        <div
          onClick={changeLanguage}
          className="flex w-[90px] cursor-pointer gap-2 rounded-lg bg-Atlantis p-2 text-lg text-White transition-transform duration-200"
        >
          {Language === "es" ? (
            <div className="flex gap-2">
              <img
                className="w-1/2"
                src={esFlagIMG}
                alt="Spanish flag language"
              />{" "}
              <button className="font-bold">ES</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <img
                className="w-1/2"
                src={enFlagIMG}
                alt="English flag language"
              />{" "}
              <button className="font-bold">EN</button>
            </div>
          )}
        </div>
      </nav>

      <nav className="m-auto flex w-[90%] flex-col dark:text-White lg:hidden">
        <div className="flex items-center justify-between gap-4 text-pretty py-10 font-Poppins">
          <i
            onClick={manejarEstadoNav}
            className="fa-solid fa-bars text-3xl"
          ></i>
          <Link to="/" className="w-[40%] md:w-[20%]">
            <img src={Logo} alt="Logo del CTP Santo Domingo" />
          </Link>
          <h1 className="text-sm md:text-lg">
            Colegio Técnico Profesional de Santo Domingo
          </h1>

          <div
            onClick={handleChangeTheme}
            className="flex cursor-pointer justify-center gap-2 rounded-lg bg-Atlantis p-2 text-White"
          >
            {theme === "light" ? (
              <i class="fa-solid fa-moon text-2xl md:text-3xl"></i>
            ) : (
              <i class="fa-regular fa-sun text-2xl md:text-3xl"></i>
            )}
          </div>

          <div
            onClick={changeLanguage}
            className="flex cursor-pointer justify-center gap-2 rounded-lg bg-Atlantis p-2 text-lg text-White md:w-1/2"
          >
            {Language === "es" ? (
              <div className="flex gap-2 md:w-1/3">
                <img
                  className="w-1/2"
                  src={esFlagIMG}
                  alt="Spanish flag language"
                />{" "}
                <button className="font-bold">ES</button>
              </div>
            ) : (
              <div className="flex gap-2 md:w-1/3">
                <img
                  className="w-1/2"
                  src={enFlagIMG}
                  alt="English flag language"
                />{" "}
                <button className="font-bold">EN</button>
              </div>
            )}
          </div>
        </div>
        {estadoNav && (
          <div className="absolute left-0 right-0 top-0 z-50 flex h-[100%] flex-col items-center bg-Atlantis px-8 py-2">
            <div className="flex items-center justify-center text-pretty pt-10 font-Poppins transition-all duration-200">
              <Link
                to="/"
                className="flex items-center justify-center gap-4"
                onClick={manejarEstadoNav}
              >
                <img
                  src={Logo}
                  alt="Logo del CTP Santo Domingo"
                  className="w-[20%]"
                />
                <h1 className="text-md text-pretty text-White md:w-1/2 md:text-xl">
                  Colegio Técnico Profesional de Santo Domingo
                </h1>
              </Link>
              <i
                onClick={manejarEstadoNav}
                className="fa-sharp fa-solid fa-xmark cursor-pointer text-4xl text-White"
              ></i>
            </div>
            <ul className="w-[100%] items-center justify-center gap-4 pt-10 font-Poppins">
              <Link
                onClick={manejarEstadoNav}
                to="/"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">{t("Home")}</li>
              </Link>

              <Link
                onClick={manejarEstadoNav}
                to="/"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">{t("AU")}</li>
              </Link>

              <Link
                onClick={manejarEstadoNav}
                to="/Events"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">
                  {t("Events")}
                </li>
              </Link>

              <Link
                onClick={manejarEstadoNav}
                to="/Services"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">
                  {t("Services")}
                </li>
              </Link>

              <Link
                onClick={manejarEstadoNav}
                to="/Posts"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">
                  {t("Posts")}
                </li>
              </Link>

              <Link
                onClick={manejarEstadoDropbox}
                to="/#"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">
                  {t("Coordinations.title")}
                </li>
              </Link>

              {estadoDropbox && (
                <div className="bg-Atlantis">
                  <ul className="flex flex-col text-lg text-White md:text-xl">
                    <Link
                      onClick={manejarEstadoNav}
                      to="/CTechnical"
                      className="ml-6 px-2"
                    >
                      <li className="m-1 rounded-xl bg-Sycamore p-2">
                        {t("Coordinations.Technical")}
                      </li>
                    </Link>
                    <Link
                      onClick={manejarEstadoNav}
                      to="/CAcademic"
                      className="ml-6 px-2"
                    >
                      <li className="m-1 rounded-xl bg-Sycamore p-2">
                        {t("Coordinations.Academic")}
                      </li>
                    </Link>
                    <Link
                      onClick={manejarEstadoNav}
                      to="/CCompany"
                      className="ml-6 px-2"
                    >
                      <li className="m-1 rounded-xl bg-Sycamore p-2">
                        {t("Coordinations.Company")}
                      </li>
                    </Link>
                  </ul>
                </div>
              )}

              <Link
                onClick={manejarEstadoNav}
                to="#Contact"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">
                  {t("Contact")}
                </li>
              </Link>

              <Link
                onClick={manejarEstadoNav}
                to="/UP"
                className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
              >
                <li className="my-2 rounded-xl bg-Sycamore p-2">{t("UP")}</li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
