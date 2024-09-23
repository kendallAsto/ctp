import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import Informacion from "../Components/Informacion";
import BTNS from "../Components/BTNS";
import Danger from "../Assets/IMGS/Danger.webp";
import Contact from "../Components/contact";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
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

function Home() {
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
      <div className="font-Lato relative">
        <section className="Container w-[90%] md:w-[90%] lg:w-[80%] m-auto overflow-hidden">
          <video
            src={Video}
            autoPlay
            controls
            className="rounded-xl mb-12"
          ></video>

          <Informacion title={t("Vision.title")} body={t("Vision.body")} />

          <Informacion
            title={t("Mission.title")}
            body={t("Mission.body", {
              CTPName: "Colegio Tecnico Profesional de Santo Domingo",
            })}
          />

          <Informacion
            title={t("Valores.title")}
            extra={
              <section>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Honesty")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Respect")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Commitment")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Responsabity")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Trust")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.Solidarity")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.FACT")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
                    {t("Valores.listValores.TW")}
                  </p>
                  <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg  flex justify-center items-center">
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
                CTPName: "Colegio Tecnico Profesional de Santo Domingo",
              })}
              extra={
                <div className="my-8">
                  <BTNS tipo="informativo" href="/" texto={t("Mission.btn")} />
                </div>
              }
            />
          </section>

          <Informacion
            title={t("EO.title")}
            body={t("EO.body", {
              CTPName: "Colegio Tecnico Profesional de Santo Domingo",
            })}
            extra={
              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  <section id="Especialidades-Diurno">
                    <div className="flex justify-center">
                      <h2 className="text-2xl bg-Fuscous text-White p-2 lg:w-1/3 rounded-full text-center cursor-pointer transition-colors duration-200 hover:bg-Blue-Dianne">
                        {t("EO.timeDiurno")}
                      </h2>
                    </div>
                    <ul>
                      <p
                        onClick={() => cambiarEstadoModal1(!estadoModal)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.DP")}
                      </p>
                      <DisenoModal
                        estado={estadoModal}
                        cambiarEstado={cambiarEstadoModal1}
                      />

                      <p
                        onClick={() => cambiarEstadoModal2(!estadoModal2)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.ECYSA")}
                      </p>
                      <EjecutivoModal
                        estado={estadoModal2}
                        cambiarEstado={cambiarEstadoModal2}
                      />

                      <p
                        onClick={() => cambiarEstadoModal3(!estadoModal3)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.CyF")}
                      </p>
                      <ContabilidadModal
                        estado={estadoModal3}
                        cambiarEstado={cambiarEstadoModal3}
                      />
                      <p
                        onClick={() => cambiarEstadoModal4(!estadoModal4)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.DDAM")}
                      </p>
                      <DesarrolloModal
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}
                      />

                      <p
                        onClick={() => cambiarEstadoModal5(!estadoModal5)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.DyMDE")}
                      </p>

                      <p
                        onClick={() => cambiarEstadoModal6(!estadoModal6)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.EET")}
                      </p>
                      <ElectronicaModal
                        estado={estadoModal6}
                        cambiarEstado={cambiarEstadoModal6}
                      />
                      <p
                        onClick={() => cambiarEstadoModal7(!estadoModal7)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities.GDLP")}
                      </p>
                      <GestionModal
                        estado={estadoModal7}
                        cambiarEstado={cambiarEstadoModal7}
                      />
                      <p
                        onClick={() => cambiarEstadoModal8(!estadoModal8)}
                        className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg"
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
                    <div className="flex justify-center">
                      <h2 className="text-2xl bg-Fuscous text-White p-2 lg:w-1/3 rounded-full text-center cursor-pointer transition-colors duration-200 hover:bg-Blue-Dianne">
                        {t("EO.timeNocturna")}
                      </h2>
                    </div>
                    <ul>
                      <p
                        onClick={() => cambiarEstadoModal9(!estadoModal9)}
                        className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities-2.ECYSA")}
                      </p>
                      <EjecutivoModalN
                        estado={estadoModal9}
                        cambiarEstado={cambiarEstadoModal9}
                      />

                      <p
                        onClick={() => cambiarEstadoModal10(!estadoModal10)}
                        className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities-2.CySDRySO")}
                      </p>
                      <CySModalN
                        estado={estadoModal10}
                        cambiarEstado={cambiarEstadoModal10}
                      />

                      <p
                        onClick={() => cambiarEstadoModal11(!estadoModal11)}
                        className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities-2.Contabilidad")}
                      </p>
                      <ContabilidadModalN
                        estado={estadoModal11}
                        cambiarEstado={cambiarEstadoModal11}
                      />

                      <p
                        onClick={() => cambiarEstadoModal12(!estadoModal12)}
                        className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg"
                      >
                        {t("EO.specialities-2.ADLOA")}
                      </p>
                      <AdministracionModal
                        estado={estadoModal12}
                        cambiarEstado={cambiarEstadoModal12}
                      />

                      <p
                        onClick={() => cambiarEstadoModal13(!estadoModal13)}
                        className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg"
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

          <section className=" flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            <div>
              <h1 className=" text-3xl font-bold font-Poppins text-Atlantis md:text-4xl mb-8">
                {t("Contact.title")}
              </h1>
              <form action="#" className="flex flex-col flex-wrap gap-4">
                <input
                  type="text"
                  placeholder={t("Contact.name")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl"
                />
                <input
                  type="text"
                  placeholder={t("Contact.mail")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl"
                />
                <textarea
                  name="message"
                  id="Message"
                  placeholder={t("Contact.message")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl h-[250px] md:h-[160px] lg:h-[250px]"
                ></textarea>
                <div className="flex items-center justify-center gap-3 m-auto bg-Atlantis text-White p-3 w-1/3 text-xl rounded-xl">
                  <i class="fa-solid fa-paper-plane text-White"></i>
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>

            <img
              src={Danger}
              alt="Foto del perro de la institucion"
              className="md:w-[80%] lg:w-[70%] m-auto rounded-xl"
            />
          </section>

          <section className="flex flex-col gap-4 my-24">
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
          <section>
            <Map />
          </section>

          <section className="m-auto mt-12">
            <Footer />
          </section>
        </section>
      </div>
    </Suspense>
  );
}

export default Home;
