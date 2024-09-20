import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("services");

  return (
    <>
      <p className="text-center md:text-3xl text-Atlantis">{t("title")}</p>
      <section className="text-lg flex flex-col  lg:flex-row gap-4 justify-center my-12 lg:text-xl w-[90%] lg:w-[70%] m-auto">
        <div className="rounded-xl overflow-hidden">
          <h2 className="bg-Sycamore text-White p-2 text-center">{t("title2")}</h2>
          <ul className="bg-Atlantis text-White list-decimal">
            <li className="p-2 ">{t("s1")}</li>
            <li className="p-2 ">{t("s2")}</li>
            <li className="p-2 ">{t("s3")}</li>
            <li className="p-2 ">{t("s4")}</li>
            <li className="p-2 ">{t("s5")}</li>
            <li className="p-2 ">{t("s6")}</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden">
          <h2 className="bg-Sycamore text-White p-2 text-center">{t("title3")}</h2>
          <ul className="bg-Atlantis text-White list-decimal text-pretty">
            <li className="p-2 ">{t("r1")}</li>
            <li className="p-2 ">{t("r2")}</li>
            <li className="p-2 ">{t("r3")}</li>
            <li className="p-2 ">{t("r4")}</li>
            <li className="p-2 ">{t("r5")}</li>
            <li className="p-2 ">{t("r6")}</li>
            <li className="p-2 ">{t("r7")}</li>
            <li className="p-2 ">{t("r8")}</li>
            <li className="p-2 ">{t("r9")}</li>
            <li className="p-2 ">{t("r10")}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
