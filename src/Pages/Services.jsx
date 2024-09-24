import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation("services");

  return (
    <>
      <p className="text-center text-Atlantis md:text-3xl">{t("title")}</p>
      <section className="m-auto my-12 flex w-[90%] flex-col justify-center gap-4 text-lg lg:w-[80%] lg:flex-row lg:text-xl">
        <div className="overflow-hidden rounded-xl">
          <h2 className="bg-Sycamore p-2 text-center text-White">
            {t("title2")}
          </h2>
          <ul className="list-decimal bg-Atlantis text-White">
            <li className="p-2">{t("s1")}</li>
            <li className="p-2">{t("s2")}</li>
            <li className="p-2">{t("s3")}</li>
            <li className="p-2">{t("s4")}</li>
            <li className="p-2">{t("s5")}</li>
            <li className="p-2">{t("s6")}</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl">
          <h2 className="bg-Sycamore p-2 text-center text-White">
            {t("title3")}
          </h2>
          <ul className="list-decimal text-pretty bg-Atlantis text-White">
            <li className="p-2">{t("r1")}</li>
            <li className="p-2">{t("r2")}</li>
            <li className="p-2">{t("r3")}</li>
            <li className="p-2">{t("r4")}</li>
            <li className="p-2">{t("r5")}</li>
            <li className="p-2">{t("r6")}</li>
            <li className="p-2">{t("r7")}</li>
            <li className="p-2">{t("r8")}</li>
            <li className="p-2">{t("r9")}</li>
            <li className="p-2">{t("r10")}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
