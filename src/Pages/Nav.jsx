import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import enFlagIMG from "../Assets/Flags/en.png";
import esFlagIMG from "../Assets/Flags/es.png";

export default function Nav() {
  const [estadoNav, setEstadoNav] = useState(false);
  const [estadoDropbox, setEstadoDropbox] = useState(false);
  const { t, i18n } = useTranslation("nav");
  const [idiomaActual, setIdiomaActual] = useState("");
  const [theme, setTheme] = useState(""); 
  const Language = i18n.language;


  function manejarEstadoNav() {
    setEstadoNav(!estadoNav);
  }
  function manejarEstadoDropbox() {
    setEstadoDropbox(!estadoDropbox);
  }
  

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idiomaActual");
    const temaGuardado = localStorage.getItem("theme");

    if (idiomaGuardado) {
      setIdiomaActual(idiomaGuardado);
      i18n.changeLanguage(idiomaGuardado); // Cambia el idioma de react-i18next
    }

    if (temaGuardado) {
      setTheme(temaGuardado);
      document.documentElement.classList.toggle('dark', temaGuardado === 'dark');
    }
  },[theme,idiomaActual,i18n]);

  useEffect(() => {
    if (estadoNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [estadoNav]);

  function changeLanguage() {
    const nuevoIdioma = idiomaActual === "es" ? "en" : "es";
    setIdiomaActual(nuevoIdioma);
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem("idiomaActual", nuevoIdioma);
  }

  const handleChangeTheme = () => {
    const nuevoTema = theme === "light" ? "dark" : "light";
    setTheme(nuevoTema);
    localStorage.setItem("theme", nuevoTema);
    document.documentElement.classList.toggle('dark', nuevoTema === 'dark');
  };


  return (
    <>
      <nav className="m-auto hidden items-center justify-center py-10 font-Poppins transition-all duration-200 dark:text-White lg:flex lg:w-[90%] lg:gap-4">
        <Link to="/" className="w-[10%]">
          <img src={Logo} alt="Logo del CTP Santo Domingo" />
          <esFlag1 />
        </Link>
        <ul className="m-auto hidden items-center justify-center py-10 font-Poppins md:grid md:grid-cols-3 lg:w-[80%] lg:gap-4">
          <li>
            <Link
              to="/"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Home")}
            </Link>
          </li>

          <li>
            <Link
              to="/Events"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Events")}
            </Link>
          </li>
          <li>
            <Link
              to="/Especialidades"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Especialidades")}
            </Link>
          </li>
          <li>
            <Link
              to="/Gallery"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Gallery")}
            </Link>
          </li>
          <li onClick={manejarEstadoDropbox} className="relative">
            <Link
              to="#"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Coordinations.title")}
            </Link>

            {estadoDropbox && (
              <div className="lg:w-92 absolute right-0 z-50 my-4 lg:text-xl">
                <ul className="rounded-xl bg-Atlantis text-White dark:bg-Blue-Dianne">
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
              to="/Contacto"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Contact")}
            </Link>
          </li>

          <li>
            <Link
              to="/Login"
              className="rounded-lg p-2 text-lg transition-all duration-200 hover:scale-90 hover:bg-Atlantis hover:text-White lg:text-xl dark:hover:bg-Blue-Dianne"
            >
              {t("Bolsa")}
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
          <h1 className="text-sm text-black md:text-lg dark:text-white">
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
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.7)]">
            <div className="relative h-full overflow-y-auto bg-white rounded-xl p-8 md:h-[100%] md:w-[80%]  dark:bg-black">
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
                  <h1 className="text-md text-black text-pretty text-White md:w-1/2 md:text-xl dark:text-white">
                    Colegio Técnico Profesional de Santo Domingo
                  </h1>
                </Link>
                <i
                  onClick={manejarEstadoNav}
                  className="fa-sharp fa-solid fa-xmark cursor-pointer text-4xl text-black dark:text-white"
                ></i>
              </div>
              <ul className="w-[100%] items-center justify-center gap-4 pt-10 font-Poppins">
                <Link
                  onClick={manejarEstadoNav}
                  to="/"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">{t("Home")}</li>
                </Link>

                <Link
                  onClick={manejarEstadoNav}
                  to="/Events"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                    {t("Events")}
                  </li>
                </Link>
                
                <Link
                  onClick={manejarEstadoNav}
                  to="/Especialidades"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                    {t("Especialidades")}
                  </li>
                </Link>

                <Link
                  onClick={manejarEstadoNav}
                  to="/Gallery"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                    {t("Gallery")}
                  </li>
                </Link>

                <Link
                  onClick={manejarEstadoDropbox}
                  to="/#"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                    {t("Coordinations.title")}
                  </li>
                </Link>

                {estadoDropbox && (
                  <div className="">
                    <ul className="flex flex-col text-lg text-White md:text-xl">
                      <Link
                        onClick={manejarEstadoNav}
                        to="/CTechnical"
                        className="ml-6 px-2"
                      >
                        <li className="m-1 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                          {t("Coordinations.Technical")}
                        </li>
                      </Link>
                      <Link
                        onClick={manejarEstadoNav}
                        to="/CAcademic"
                        className="ml-6 px-2"
                      >
                        <li className="m-1 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                          {t("Coordinations.Academic")}
                        </li>
                      </Link>
                      <Link
                        onClick={manejarEstadoNav}
                        to="/CCompany"
                        className="ml-6 px-2"
                      >
                        <li className="m-1 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">
                          {t("Coordinations.Company")}
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}

                <Link
                  onClick={manejarEstadoNav}
                  to="/Contacto"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">{t("Contact")}</li>
                </Link>

                <Link
                  onClick={manejarEstadoNav}
                  to="/Login"
                  className="rounded-lg text-lg text-white transition-all duration-200 md:text-xl"
                >
                  <li className="my-2 rounded-xl bg-Sycamore p-2 dark:bg-Blue-Dianne">{t("Bolsa")}</li>
                </Link>

              </ul>
            </div>
          </section>
          
        )}
      </nav>
      <Outlet />
    </>
  );
}
