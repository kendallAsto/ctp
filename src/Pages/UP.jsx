import React, { Suspense } from "react";
import fotoDanger1 from "../Assets/IMGS/Danger/Danger-1.webp";
import fotoDanger2 from "../Assets/IMGS/Danger/Danger-2.webp";
import fotoDanger3 from "../Assets/IMGS/Danger/Danger-3.webp";
import fotoDanger4 from "../Assets/IMGS/Danger/Danger-4.webp";
import fotoDanger5 from "../Assets/IMGS/Danger/Danger-5.webp";
import fotoDanger6 from "../Assets/IMGS/Danger/Danger-6.webp";
import fotoDanger7 from "../Assets/IMGS/Danger/Danger-7.webp";
import fotoDanger8 from "../Assets/IMGS/Danger/Danger-8.webp";
import fotoDanger9 from "../Assets/IMGS/Danger/Danger-9.webp";
import fotoDanger10 from "../Assets/IMGS/Danger/Danger-10.webp";
import fotoDanger11 from "../Assets/IMGS/Danger/Danger-11.webp";
import fotoDanger12 from "../Assets/IMGS/Danger/Danger-12.webp";
import fotoDanger13 from "../Assets/IMGS/Danger/Danger-13.webp";
import fotoDanger14 from "../Assets/IMGS/Danger/Danger-14.webp";
import fotoDanger15 from "../Assets/IMGS/Danger/Danger-15.webp";
import fotoDanger16 from "../Assets/IMGS/Danger/Danger-16.webp";
import fotoDanger17 from "../Assets/IMGS/Danger/Danger-17.webp";
import fotoDanger18 from "../Assets/IMGS/Danger/Danger-18.webp";
import fotoDanger19 from "../Assets/IMGS/Danger/Danger-19.webp";
import fotoDanger20 from "../Assets/IMGS/Danger/Danger-20.webp";
import fotoDanger21 from "../Assets/IMGS/Danger/Danger-21.webp";
import fotoDanger22 from "../Assets/IMGS/Danger/Danger-22.webp";
import fotoDanger23 from "../Assets/IMGS/Danger/Danger-23.webp";
import fotoDanger24 from "../Assets/IMGS/Danger/Danger-24.webp";
import fotoDanger25 from "../Assets/IMGS/Danger/Danger-25.webp";
import fotoDanger26 from "../Assets/IMGS/Danger/Danger-26.webp";
import fotoDanger27 from "../Assets/IMGS/Danger/Danger-27.webp";
import IMG from "../Components/IMG";
import { useTranslation } from "react-i18next";

function UP() {
  const { t } = useTranslation("danger");

  return (
    <Suspense>
      <section className="flex w-[90%] flex-col lg:w-[80%] m-auto">
        <section>
          <h1 className="text-3xl font-bold font-Poppins text-Atlantis lg:text-4xl">
            {t("Danger.title")}
          </h1>
          <div className="bg-Sycamore text-White p-4 rounded-xl font-Lato">
            <p className="text-lg md:text-2xl text-pretty mb-3">
              {t("Danger.p1")}
            </p>
            <p className="text-lg md:text-2xl text-pretty mb-3">
              {t("Danger.p2")}
            </p>
            <p className="text-lg md:text-2xl text-pretty mb-3">
              {t("Danger.p3")}
            </p>
            <p className="text-lg md:text-2xl text-pretty mb-3">
              {t("Danger.p4")}
            </p>
            <p className="text-lg md:text-2xl text-pretty mb-3">
              {t("Danger.p5")}
            </p>
          </div>
        </section>
        <section className=" grid grid-cols-2 md:flex flex-wrap justify-center items-center">
          <IMG src={fotoDanger1} alt="Foto de danger" />
          <IMG src={fotoDanger2} alt="Foto de danger" />
          <IMG src={fotoDanger3} alt="Foto de danger" />
          <IMG src={fotoDanger4} alt="Foto de danger" />
          <IMG src={fotoDanger5} alt="Foto de danger" />
          <IMG src={fotoDanger6} alt="Foto de danger" />
          <IMG src={fotoDanger7} alt="Foto de danger" />
          <IMG src={fotoDanger8} alt="Foto de danger" />
          <IMG src={fotoDanger9} alt="Foto de danger" />
          <IMG src={fotoDanger10} alt="Foto de danger" />
          <IMG src={fotoDanger11} alt="Foto de danger" />
          <IMG src={fotoDanger12} alt="Foto de danger" />
          <IMG src={fotoDanger13} alt="Foto de danger" />
          <IMG src={fotoDanger14} alt="Foto de danger" />
          <IMG src={fotoDanger15} alt="Foto de danger" />
          <IMG src={fotoDanger16} alt="Foto de danger" />
          <IMG src={fotoDanger17} alt="Foto de danger" />
          <IMG src={fotoDanger18} alt="Foto de danger" />
          <IMG src={fotoDanger19} alt="Foto de danger" />
          <IMG src={fotoDanger20} alt="Foto de danger" />
          <IMG src={fotoDanger21} alt="Foto de danger" />
          <IMG src={fotoDanger22} alt="Foto de danger" />
          <IMG src={fotoDanger23} alt="Foto de danger" />
          <IMG src={fotoDanger24} alt="Foto de danger" />
          <IMG src={fotoDanger25} alt="Foto de danger" />
          <IMG src={fotoDanger26} alt="Foto de danger" />
          <IMG src={fotoDanger27} alt="Foto de danger" />
        </section>
      </section>
    </Suspense>
  );
}

export default UP;
