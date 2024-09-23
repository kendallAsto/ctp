import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import enFlagIMG from "../Assets/Flags/en.png";
import esFlagIMG from "../Assets/Flags/es.png";

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

  const navigate = useNavigate();
  function changeLanguage() {
    if (idiomaActual === "es") {
      i18n.changeLanguage("en");
      setIdiomaActual("en"); // Update state
    } else {
      i18n.changeLanguage("es");
      setIdiomaActual("es"); // Update state
    }
  }

  return (
    <>
      <nav className="hidden lg:flex lg:gap-4 justify-center py-10 items-center font-Poppins lg:w-[80%] m-auto">
        <Link to="/" className="w-[10%]">
          <img src={Logo} alt="Logo del CTP Santo Domingo" />
          <esFlag1/>
        </Link>
        <ul className="hidden md:grid md:grid-cols-4 lg:gap-4 justify-center py-10 items-center font-Poppins lg:w-[80%] m-auto">
          <li>
            <Link
              to="/"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("Home")}
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("AU")}
            </Link>
          </li>
          <li>
            <Link
              to="/Events"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("Events")}
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t('Services')}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("Posts")}
            </Link>
          </li>
          <li onClick={manejarEstadoDropbox} className="relative ">
            <Link
              to="#"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg  transition-all duration-200 lg:text-xl"
            >
              {t('Coordinations.title')}
            </Link>

            {estadoDropbox && (
              <div className="lg:text-xl absolute right-0 my-4 lg:w-92 z-50">
                <ul className="bg-Atlantis text-White rounded-xl">
                  <Link to="/" className="p-2 flex cursor-pointer">
                    {t('Coordinations.Technical')}
                  </Link>
                  <Link to="/" className="p-2 flex cursor-pointer">
                    {t('Coordinations.Academic')}
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to="#Contact"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("Contact")}
            </Link>
          </li>

          <li>
            <Link
              to="/UP"
              className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
            >
              {t("UP")}
            </Link>
          </li>
        </ul>

        <div onClick={changeLanguage} className="text-lg text-White bg-Atlantis p-2 rounded-lg flex w-[90px] gap-2 cursor-pointer transition-transform duration-200">
            {Language == "es" ? <img className="w-1/2" src={esFlagIMG}/> : <img className="w-1/2" src={enFlagIMG}/> }
          <button className="font-bold">{t("CL")}</button>
        </div>
      </nav>












      <nav className="flex flex-col lg:hidden w-[90%] m-auto">
        <div className="flex gap-4 justify-between py-10 items-center font-Poppins text-pretty">
          <i
            onClick={manejarEstadoNav}
            className="fa-solid fa-bars text-3xl"
          ></i>
          <Link to="/" className="w-[40%] md:w-[20%]">
            <img src={Logo} alt="Logo del CTP Santo Domingo" />
          </Link>
          <h1 className="text-sm md:text-lg">
            Colegio Tecnico Profesional de Santo Domingo
          </h1>

          <div  onClick={changeLanguage} className="text-lg text-White bg-Atlantis p-2 rounded-lg flex gap-2 justify-center cursor-pointer">
            {Language == "es" ? <img className="w-1/2" src={esFlagIMG}/> : <img className="w-1/2" src={enFlagIMG}/> }
          <button className="font-bold">{t("CL")}</button>
        </div>
        </div>
        {estadoNav && (
          <div className="flex flex-col items-center px-8 py-2 bg-Atlantis absolute top-0 left-0 right-0 z-50 h-[100%]">
            <div className="flex gap-4 pt-10 justify-center font-Poppins text-pretty transition-all duration-200 items-center transition-transform duration-200">
              <Link to="/" className="w-[20%]">
                <img src={Logo} alt="Logo del CTP Santo Domingo" />
              </Link>
              <h1 className="text-md md:text-xl text-pretty text-White md:w-1/2">
                Colegio Tecnico Profesional de Santo Domingo
              </h1>
              <i
                onClick={manejarEstadoNav}
                className="fa-sharp fa-solid fa-xmark text-4xl text-White"
              ></i>
            </div>
            <ul className="gap-4 justify-center py-10 items-center font-Poppins  w-[100%]">
              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/"
                  className="text-lg md:text-xl text-white p-2 rounded-lg transition-all duration-200"
                >
                  {t("Home")}
                </Link>
              </li>

              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/#About-Us"
                  className="text-lg md:text-xl text-white p-2 rounded-lg transition-all duration-200"
                >
                  {t("AU")}
                </Link>
              </li>
              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/Events"
                  className="text-lg md:text-xl text-white p-2 rounded-lg transition-all duration-200"
                >
                  {t("Events")}
                </Link>
              </li>
              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/Services"
                  className="text-lg md:text-xl text-white p-2 rounded-lg transition-all duration-200"
                >
                  {t('Services')}
                </Link>
              </li>
              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/Posts"
                  className="text-lg md:text-xl text-white p-2 rounded-lg transition-all duration-200"
                >
                  {t("Posts")}
                </Link>
              </li>
              <li
                onClick={manejarEstadoDropbox}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="#"
                  className="text-lg md:text-xl text-White p-2 rounded-lg transition-all duration-200"
                >
                  {t('Coordinations.title')}
                </Link>

                {estadoDropbox && (
                  <div>
                    <ul className=" text-White rounded-xl flex flex-col text-lg md:text-xl">
                      <Link
                        to="/"
                        className="ml-6 bg-Atlantis px-2 my-1 rounded-xl"
                      >
                        {t('Coordinations.Technical')}
                      </Link>
                      <Link
                        to="/"
                        className="ml-6 bg-Atlantis px-2 my-1 rounded-xl"
                      >
                        {t('Coordinations.Academic')}
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="#Contact"
                  className="text-lg md:text-xl text-White p-2 rounded-lg transition-all duration-200"
                >
                  {t("Contact")}
                </Link>
              </li>

              <li
                onClick={manejarEstadoNav}
                className="bg-Sycamore p-2 m-2 rounded-xl"
              >
                <Link
                  to="/UP"
                  className="text-lg md:text-xl text-White p-2 rounded-lg transition-all duration-200"
                >
                  {t("UP")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
