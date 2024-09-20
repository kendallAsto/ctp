import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  let estadoNav = false;
  const { t, i18n } = useTranslation("Nav");
  const [idiomaActual, setIdiomaActual] = useState("es");
  const {cambiarEstadoNav } = useState(false);

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
      <nav className="hidden md:flex lg:gap-4 justify-center py-10 items-center font-Poppins">
        <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-[10%]" />
        <Link
          to="/"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Home")}
        </Link>
        <Link
          to="#"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("AU")}
        </Link>
        <Link
          to="/Posts"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Posts")}
        </Link>
        <Link
          to="#Contact"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Contact")}
        </Link>
        <Link
          to="/Events"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("Events")}
        </Link>

        <Link
          to="/UP.jsx"
          className="text-lg hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-all duration-200 lg:text-xl"
        >
          {t("UP")}
        </Link>
        <div className="text-lg text-White bg-Atlantis p-2 rounded-lg flex gap-2 items-center justify-center">
          <i class="fa-solid fa-flag"></i>
          <button onClick={changeLanguage}>{t("CL")}</button>
        </div>
      </nav>

      <nav className="flex flex-col lg:hidden w-[90%] m-auto">
        <div className="flex gap-4 justify-between py-10 items-center font-Poppins text-pretty">
          <i onClick={()=> estadoNav == true} className="fa-solid fa-bars text-3xl"></i>
          <img
            src={Logo}
            alt="Logo del CTP Santo Domingo"
            className="w-[40%]"
          />
          <h1 className="text-sm">
            Colegio Tecnico Profesional de Santo Domingo
          </h1>

          <div className="text-md w-1/3 text-White bg-Atlantis p-2 rounded-lg flex gap-2 items-center justify-center">
            <i class="fa-solid fa-flag"></i>
            <button onClick={changeLanguage}>{t("CL")}</button>
          </div>
        </div>
        {estadoNav && (
          <div className="flex flex-col justify-center items-center px-8 py-2 bg-Atlantis absolute top-0 left-0 right-0 z-50 h-[100vh]">
            <div className="flex gap-4 justify-between py-10 items-center font-Poppins text-pretty transition-all duration-200">
              <img
                src={Logo}
                alt="Logo del CTP Santo Domingo"
                className="w-[20%]"
              />
              <h1 className="text-md text-White">
                Colegio Tecnico Profesional de Santo Domingo
              </h1>
              <i onClick={()=> estadoNav == false} className="fa-sharp fa-solid fa-xmark text-4xl text-White"></i>
            </div>
            <Link
              to="/"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("Home")}
            </Link>
            <Link
              to="#"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("AU")}
            </Link>
            <Link
              to="/Posts"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("Posts")}
            </Link>
            <Link
              to="#Contact"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("Contact")}
            </Link>
            <Link
              to="/Events"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("Events")}
            </Link>

            <Link
              to="/UP.jsx"
              className=" text-White text-lg p-2 rounded-lg transition-all duration-200 lg:text-xl bg-Sycamore w-[100%] m-2"
            >
              {t("UP")}
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
