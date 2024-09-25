import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";

export default function CTechnichal() {
  const { t } = useTranslation("coordinations");
  return (
    <div className="m-auto w-[90%] text-black transition-all duration-500 dark:text-White lg:w-[80%]">
      <h1 className="mb-12 text-center text-2xl font-bold text-Atlantis lg:text-3xl">
        {t("Company.title")}
      </h1>
      <section className="flex grid-cols-2 flex-col gap-12 lg:grid">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-1/3" />

          <div className="my-4 flex gap-4 flex-col">
            <div className="flex items-center justify-center gap-2 text-xl lg:text-2xl">
              <i class="fa-solid fa-phone-volume"></i>
              <p>{t("Contact.Company.phone")}</p>
            </div>

            <div className="my-2 flex items-center justify-center gap-2 text-xl lg:text-2xl">
              <i class="fa-solid fa-envelope"></i>
              <p>{t("Contact.Company.mail")}</p>
            </div>
          </div>

          <h2 className="my-4 text-2xl font-bold text-Sycamore lg:text-3xl">
            {t("Company.subtitle")}
          </h2>
          <p className="text-xl lg:text-2xl">{t("Company.description")}</p>

          <h2 className="my-4 text-2xl font-bold text-Sycamore lg:text-3xl">
            {t("Company.rules.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.rules.1")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.rules.2")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.rules.3")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.rules.4")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.rules.5")}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 text-center text-2xl font-bold text-Sycamore lg:text-3xl">
            {t("Company.functions.title")}
          </h2>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.1")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.2")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.3")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.4")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.5")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.functions.6")}
            </li>
          </ul>

          <h3 className="my-4 text-center text-2xl font-bold text-Sycamore lg:text-3xl">
            {t("Company.examples.title")}
          </h3>
          <ul className="m-auto flex w-[90%] flex-col gap-2 lg:w-[100%]">
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.examples.1")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.examples.2")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.examples.3")}
            </li>
            <li className="list-disc text-xl lg:text-2xl">
              {t("Company.examples.4")}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
