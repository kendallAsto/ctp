import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Assets/IMGS/logo.png";
export default function Nav() {
  const { t, i18n } = useTranslation("Nav");
  return (
    <nav className="flex gap-4 justify-center py-10 items-center font-Poppins">
      <img src={Logo} alt="Logo del CTP Santo Domingo" className="w-[10%]" />
      <a
        href="/"
        className="text-xl hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-colors duration-150"
      >
        {t("Home")}
      </a>
      <a
        href="#About-us"
        className="text-xl hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-colors duration-150"
      >
        {t("AU")}
      </a>
      <a
        href="/Posts"
        className="text-xl hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-colors duration-150"
      >
        {t("Posts")}
      </a>
      <a
        href="#Contact"
        className="text-xl hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-colors duration-150"
      >
        {t("Contact")}
      </a>
      <a
        href="/Events"
        className="text-xl hover:text-White hover:bg-Atlantis p-2 rounded-lg hover:scale-90 transition-colors duration-150"
      >
        {t("Events")}
      </a>
        <div className="text-xl text-White bg-Atlantis p-2 rounded-lg flex gap-2 items-center justify-center">
        <i class="fa-solid fa-flag"></i>
        <button>{t("CL")}</button>
      </div>
    </nav>
  );
}
