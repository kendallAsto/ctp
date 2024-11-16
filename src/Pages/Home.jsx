import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import Informacion from "../Components/Informacion";
import Danger from "../Assets/IMGS/Danger.webp";
import Map from "../Components/Map";
import Video from "../Assets/Videos/videoCTP.webm";

function Home() {
  const { t } = useTranslation("information");
  
  return (
    <Suspense fallback="Cargando informacion">
      <div className="relative font-Lato text-black transition-all duration-500 dark:bg-black dark:text-White">
        <section className="Container m-auto w-[90%] overflow-hidden transition-all duration-500">
          <video
            src={Video}
            autoPlay
            muted
            loop
            controls
            className="mb-24 rounded-xl"
          ></video>

          <Informacion title={t("Vision.title")} body={t("Vision.body")} />

          <Informacion
            title={t("Mission.title")}
            body={t("Mission.body", {
              CTPName: "Colegio Técnico Profesional de Santo Domingo",
            })}
          />

          <Informacion
            title={t("Valores.title")}
            extra={
              <section>
                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Honesty")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Respect")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Commitment")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Responsability")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Trust")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.Solidarity")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.FACT")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.TW")}
                  </p>
                  <p className="my-2 shadow-md dark:shadow-White shadow-black flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White dark:bg-Blue-Dianne">
                    {t("Valores.listValores.DAE")}
                  </p>
                </div>
              </section>
            }
          />

          <section id="About-Us">
            <Informacion
              title={t("History.title")}
              body={t("History.body-1")}
              body2={t("History.body-2")}
              body3={t("History.body-3", {
                CTPName: "Colegio Técnico Profesional de Santo Domingo",
              })}
            />
          </section>
          
          <Informacion
            title={t("Services.title")}
            extra={
            <section className="m-auto my-12 flex flex-col justify-center gap-4 text-lg lg:w-[100%] lg:flex-row lg:text-xl">
              <div className="overflow-hidden rounded-xl">
                <h2 className="bg-Sycamore p-2 text-center text-White dark:bg-gray-800">
                  {t("Services.title2")}
                </h2>
                <ul className="list-decimal text-pretty bg-Atlantis text-White text-center justify-center dark:bg-Blue-Dianne">
                  
                  <li className="py-5 p-2">{t("Services.s1")}</li>
                  <li className="py-5 p-2">{t("Services.s2")}</li>
                  <li className="py-5 p-2">{t("Services.s3")}</li>
                  <li className="py-5 p-2">{t("Services.s4")}</li>
                  <li className="py-5 p-2">{t("Services.s5")}</li>
                  <li className="py-5 p-2">{t("Services.s6")}</li>
                  
                </ul>
              </div>
  
              <div className="overflow-hidden rounded-xl">
                <h2 className="bg-Sycamore text-Sycamore p-2 text-center text-White dark:bg-gray-800">
                  {t("Services.title3")}
                </h2>
                <ul className="list-decimal text-pretty bg-Atlantis text-White text-center justify-center dark:bg-Blue-Dianne">
                  <li className="p-2">{t("Services.r1")}</li>
                  <li className="p-2">{t("Services.r2")}</li>
                  <li className="p-2">{t("Services.r3")}</li>
                  <li className="p-2">{t("Services.r4")}</li>
                  <li className="p-2">{t("Services.r5")}</li>
                  <li className="p-2">{t("Services.r6")}</li>
                  <li className="p-2">{t("Services.r7")}</li>
                  <li className="p-2">{t("Services.r8")}</li>
                  <li className="p-2">{t("Services.r9")}</li>
                  <li className="p-2">{t("Services.r10")}</li>
                </ul>
              </div>
            </section>}
          />

          <Informacion
            title={
              t("Danger.title")
            }
            extra={
              <section className="m-auto my-12 flex w-[100%] flex-col justify-center gap-4 text-lg lg:w-[100%] lg:flex-row lg:text-xl">
                <div className="m-auto overflow-hidden rounded-xl">
                    <img
                      src={Danger}
                      alt="Foto del perro de la institucion"
                      className="m-auto rounded-xl w-full border-Atlantis border-2 dark:border-Blue-Dianne"
                    />
                </div>

                <div className="m-auto overflow-hidden rounded-xl bg-Sycamore font-Lato text-White text-center justify-center dark:bg-Blue-Dianne">
                  <h1 className="m-auto text-White font-Poppins text-3xl font-bold lg:text-4xl">
                      {t("Danger.name")}
                  </h1>  
                  <p className="m-auto mb-3 text-pretty text-lg md:text-2xl">{t("Danger.p1")}</p>
                  <p className="m-auto mb-3 text-pretty text-lg md:text-2xl">{t("Danger.p2")}</p>
                </div> 
            </section>
            }
          />

          <section className="mb-12">
            <Map />
          </section>
        </section>
      </div>
    </Suspense>
  );
}

export default Home;
