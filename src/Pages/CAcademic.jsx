import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";

export default function CTechnichal() {
  const { t } = useTranslation("coordinations");

  return (
    <div className="flex flex-col text-black transition-all duration-500 dark:text-white lg:p-6 Container m-auto w-[90%] overflow-hidden transition-all duration-500">
      <h1 className="mb-12 text-center text-3xl font-extrabold text-Atlantis lg:text-4xl dark:text-emerald-300">
        {t("Academic.title")}
      </h1>

      <section className="grid gap-12 rounded-lg p-2 shadow-lg lg:grid-cols-2 bg-gray-50 dark:bg-gray-800 lg:p-12">
        {/* Logo y Contacto */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-1/3 mb-6" />

          <div className="flex flex-col items-center gap-4 text-xl lg:text-2xl">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <i className="fa-solid fa-phone-volume text-Atlantis dark:text-emerald-400"></i>
              <p>{t("Contact.Academic.phone")}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <i className="fa-solid fa-envelope text-Atlantis dark:text-emerald-400"></i>
              <p>{t("Contact.Academic.mail")}</p>
            </div>
          </div>
        </div>

        {/* Información y Listas */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-Sycamore dark:text-emerald-300 lg:text-3xl">
            {t("Academic.subtitle")}
          </h2>
          <p className="text-center text-xl text-gray-800 dark:text-gray-200 lg:text-2xl">
            {t("Academic.description")}
          </p>

          {/* Reglas */}
          <div className="w-full">
            <h2 className="mt-6 text-center text-2xl font-bold text-Sycamore dark:text-emerald-300 lg:text-3xl">
              {t("Academic.rules.title")}
            </h2>
            <ul className="mt-4 flex flex-col items-start gap-3 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 lg:p-6">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="list-disc text-lg text-gray-800 dark:text-gray-200 lg:text-xl">
                  {t(`Academic.rules.${i + 1}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Funciones */}
          <div className="w-full">
            <h2 className="mt-6 text-center text-2xl font-bold text-Sycamore dark:text-emerald-300 lg:text-3xl">
              {t("Academic.functions.title")}
            </h2>
            <ul className="mt-4 flex flex-col items-start gap-3 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 lg:p-6">
              {[...Array(12)].map((_, i) => (
                <li key={i} className="list-disc text-lg text-gray-800 dark:text-gray-200 lg:text-xl">
                  {t(`Academic.functions.${i + 1}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Ejemplos */}
          <div className="w-full">
            <h3 className="mt-6 text-center text-2xl font-bold text-Sycamore dark:text-emerald-300 lg:text-3xl">
              {t("Academic.examples.title")}
            </h3>
            <ul className="mt-4 flex flex-col items-start gap-3 p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 lg:p-6">
              {[...Array(3)].map((_, i) => (
                <li key={i} className="list-disc text-lg text-gray-800 dark:text-gray-200 lg:text-xl">
                  {t(`Academic.examples.${i + 1}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
