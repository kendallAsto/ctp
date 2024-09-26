import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import Informacion from "../Components/Informacion";
import Danger from "../Assets/IMGS/Danger.webp";
import Contact from "../Components/contact";
import Map from "../Components/Map";
import Video from "../Assets/Videos/videoCTP.webm";
import ContabilidadModal from "../Components/Modals/Diurno/ContabilidadModal";
import DesarrolloModal from "../Components/Modals/Diurno/DesarrolloModal";
import DisenoModal from "../Components/Modals/Diurno/DisenoModal";
import EjecutivoModal from "../Components/Modals/Diurno/EjecutivoModal";
import ElectronicaModal from "../Components/Modals/Diurno/Electronica";
import GestionModal from "../Components/Modals/Diurno/GestionModal";
import MecanicaModal from "../Components/Modals/Diurno/Mecanica";
import EjecutivoModalN from "../Components/Modals/Nocturno/EjecutivoModalN.jsx";
import CySModalN from "../Components/Modals/Nocturno/CySModalN.jsx";
import ContabilidadModalN from "../Components/Modals/Nocturno/ContabilidadModalN.jsx";
import AdministracionModal from "../Components/Modals/Nocturno/AdministracionModalN.jsx";
import MecanicaModalN from "../Components/Modals/Nocturno/MecanicaModalN.jsx";

import { forwardRef } from "react";
import DyMModal from "../Components/Modals/Diurno/DyMModal.jsx";
function Home(ref) {
  const { t } = useTranslation("information");

  const [estadoModal, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);

  return (
    <Suspense fallback="Cargando informacion">
      <div className="relative font-Lato text-black transition-all duration-500 dark:bg-black dark:text-White">
        <section className="Container m-auto w-[90%] overflow-hidden transition-all duration-500">
          <video
            src={Video}
            autoPlay
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
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Honesty")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Respect")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Commitment")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Responsability")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Trust")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.Solidarity")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.FACT")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
                    {t("Valores.listValores.TW")}
                  </p>
                  <p className="my-2 flex items-center justify-center rounded-lg bg-Atlantis p-2 text-2xl text-White">
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
            title={t("EO.title")}
            body={t("EO.body", {
              CTPName: "Colegio Técnico Profesional de Santo Domingo",
            })}
            extra={
              <div>
                <div className="grid gap-4 md:grid-cols-2">
                  <section id="Especialidades-Diurno">
                    <div className="flex justify-center">
                      <h2 className="cursor-pointer rounded-full bg-Fuscous p-2 text-center text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne lg:w-1/3">
                        {t("EO.timeDiurno")}
                      </h2>
                    </div>
                    <ul>
                      <p
                        onClick={() => cambiarEstadoModal1(!estadoModal)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DP")}
                      </p>
                      <DisenoModal
                        estado={estadoModal}
                        cambiarEstado={cambiarEstadoModal1}
                      />

                      <p
                        onClick={() => cambiarEstadoModal2(!estadoModal2)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.ECYSA")}
                      </p>
                      <EjecutivoModal
                        estado={estadoModal2}
                        cambiarEstado={cambiarEstadoModal2}
                      />

                      <p
                        onClick={() => cambiarEstadoModal3(!estadoModal3)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.CyF")}
                      </p>
                      <ContabilidadModal
                        estado={estadoModal3}
                        cambiarEstado={cambiarEstadoModal3}
                      />
                      <p
                        onClick={() => cambiarEstadoModal4(!estadoModal4)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DDAM")}
                      </p>
                      <DesarrolloModal
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}
                      />

                      <p
                        onClick={() => cambiarEstadoModal5(!estadoModal5)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DyMDE")}
                      </p>
                      <DyMModal
                        estado={estadoModal5}
                        cambiarEstado={cambiarEstadoModal5}
                      />

                      <p
                        onClick={() => cambiarEstadoModal6(!estadoModal6)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.EET")}
                      </p>
                      <ElectronicaModal
                        estado={estadoModal6}
                        cambiarEstado={cambiarEstadoModal6}
                      />
                      <p
                        onClick={() => cambiarEstadoModal7(!estadoModal7)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.GDLP")}
                      </p>
                      <GestionModal
                        estado={estadoModal7}
                        cambiarEstado={cambiarEstadoModal7}
                      />
                      <p
                        onClick={() => cambiarEstadoModal8(!estadoModal8)}
                        className="my-2 cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.RDLVL")}
                      </p>
                      <MecanicaModal
                        estado={estadoModal8}
                        cambiarEstado={cambiarEstadoModal8}
                      />
                    </ul>
                  </section>

                  <section className="Especialidades-Nocturno">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="cursor-pointer rounded-full bg-Fuscous p-2 text-center text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne lg:w-1/3">
                        {t("EO.timeNocturna")}
                      </h2>
                      <div className="flex gap-8 pt-2">
                        <p className="font-bold text-Fuscous">
                          {t("EO.Requirements.title")}
                        </p>
                        <div>
                          <ul>
                            <li className="list-disc text-gray-500">
                              {t("EO.Requirements.1")}
                            </li>
                            <li className="list-disc text-gray-500">
                              {t("EO.Requirements.2")}
                            </li>
                            <li className="list-disc text-gray-500">
                              {t("EO.Requirements.3")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <p
                        onClick={() => cambiarEstadoModal9(!estadoModal9)}
                        className="my-2 cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.ECYSA")}
                      </p>
                      <EjecutivoModalN
                        estado={estadoModal9}
                        cambiarEstado={cambiarEstadoModal9}
                      />

                      <p
                        onClick={() => cambiarEstadoModal10(!estadoModal10)}
                        className="my-2 cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.CySDRySO")}
                      </p>
                      <CySModalN
                        estado={estadoModal10}
                        cambiarEstado={cambiarEstadoModal10}
                      />

                      <p
                        onClick={() => cambiarEstadoModal11(!estadoModal11)}
                        className="my-2 cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.Contabilidad")}
                      </p>
                      <ContabilidadModalN
                        estado={estadoModal11}
                        cambiarEstado={cambiarEstadoModal11}
                      />

                      <p
                        onClick={() => cambiarEstadoModal12(!estadoModal12)}
                        className="my-2 cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.ADLOA")}
                      </p>
                      <AdministracionModal
                        estado={estadoModal12}
                        cambiarEstado={cambiarEstadoModal12}
                      />

                      <p
                        onClick={() => cambiarEstadoModal13(!estadoModal13)}
                        className="my-2 cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.RDLVL")}
                      </p>
                      <MecanicaModalN
                        estado={estadoModal13}
                        cambiarEstado={cambiarEstadoModal13}
                      />
                    </ul>
                  </section>
                </div>
              </div>
            }
          />

          <section id="Contact" className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2">
            <div>
              <h1 className="mb-8 font-Poppins text-3xl font-bold text-Sycamore md:text-4xl">
                {t("Contact.title")}
              </h1>
              <form action="#" className="flex flex-col flex-wrap gap-4">
                <input
                  type="text"
                  placeholder={t("Contact.name")}
                  className="my-2 rounded-lg bg-Blue-Dianne p-3 text-xl text-white"
                />
                <input
                  type="text"
                  placeholder={t("Contact.mail")}
                  className="my-2 rounded-lg bg-Blue-Dianne p-3 text-xl text-white"
                />
                <textarea
                  name="message"
                  id="Message"
                  placeholder={t("Contact.message")}
                  className="my-2 h-[250px] rounded-lg bg-Blue-Dianne p-3 text-xl text-white md:h-[160px] lg:h-[250px]"
                ></textarea>
                <div className="m-auto flex w-1/3 items-center justify-center gap-3 rounded-xl bg-Atlantis p-3 text-xl text-White">
                  <i class="fa-solid fa-paper-plane text-White"></i>
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>

            <img
              src={Danger}
              alt="Foto del perro de la institucion"
              className="m-auto rounded-xl md:w-[80%] lg:w-[70%]"
            />
          </section>

          <section className="my-24 flex flex-col gap-4">
            <Contact
              clase="fa-solid fa-phone text-3xl"
              body="(+506) 2244-3190"
            />
            <Contact
              clase="fa-solid fa-envelope text-3xl"
              body="ctp.santodomingo@mep.go.cr"
            />
            <Contact
              clase="fa-solid fa-map text-3xl"
              body="300 metros Oeste y 25 metros Sur de la Iglesia Católica de Santa Rosa de Santo Domingo, Heredia , Santo Domingo, Costa Rica"
            />
          </section>
          <section className="mb-12">
            <Map />
          </section>
        </section>
      </div>
    </Suspense>
  );
}

export default forwardRef(Home);
