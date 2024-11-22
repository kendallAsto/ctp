import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";
import Informacion from "../Components/Informacion";
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
import DyMModal from "../Components/Modals/Diurno/DyMModal.jsx";

function Especialidades(){
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
            <Informacion

            title={t("EO.title")}
            body={t("EO.body", {
              CTPName: "Colegio Técnico Profesional de Santo Domingo",
            })}
            extra={
              <div className="relative font-Lato text-black transition-all duration-500 dark:bg-black dark:text-White">
                    
                  
                <div className="grid gap-4 md:grid-cols-2">
                  
                  <section id="Especialidades-Diurno" className="Container m-auto w-[90%] overflow-hidden transition-all duration-500">
                    <div className="flex justify-center">
                      <h2 className="cursor-pointer rounded-full bg-Fuscous p-2 text-center text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne lg:w-1/3">
                        {t("EO.timeDiurno")}
                      </h2>
                    </div>
                    <ul className="flex flex-col gap-1">
                      <p
                        onClick={() => cambiarEstadoModal1(!estadoModal)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DP")}
                      </p>
                      <DisenoModal
                        estado={estadoModal}
                        cambiarEstado={cambiarEstadoModal1}
                      />

                      <p
                        onClick={() => cambiarEstadoModal2(!estadoModal2)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.ECYSA")}
                      </p>
                      <EjecutivoModal
                        estado={estadoModal2}
                        cambiarEstado={cambiarEstadoModal2}
                      />

                      <p
                        onClick={() => cambiarEstadoModal3(!estadoModal3)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.CyF")}
                      </p>
                      <ContabilidadModal
                        estado={estadoModal3}
                        cambiarEstado={cambiarEstadoModal3}
                      />
                      <p
                        onClick={() => cambiarEstadoModal4(!estadoModal4)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DDAM")}
                      </p>
                      <DesarrolloModal
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}
                      />

                      <p
                        onClick={() => cambiarEstadoModal5(!estadoModal5)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.DyMDE")}
                      </p>
                      <DyMModal
                        estado={estadoModal5}
                        cambiarEstado={cambiarEstadoModal5}
                      />

                      <p
                        onClick={() => cambiarEstadoModal6(!estadoModal6)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.EET")}
                      </p>
                      <ElectronicaModal
                        estado={estadoModal6}
                        cambiarEstado={cambiarEstadoModal6}
                      />
                      <p
                        onClick={() => cambiarEstadoModal7(!estadoModal7)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.GDLP")}
                      </p>
                      <GestionModal
                        estado={estadoModal7}
                        cambiarEstado={cambiarEstadoModal7}
                      />
                      <p
                        onClick={() => cambiarEstadoModal8(!estadoModal8)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Blue-Dianne"
                      >
                        {t("EO.specialities.RDLVL")}
                      </p>
                      <MecanicaModal
                        estado={estadoModal8}
                        cambiarEstado={cambiarEstadoModal8}
                      />
                    </ul>
                  </section>

                  <section className="Especialidades-Nocturno Container m-auto w-[90%] overflow-hidden transition-all duration-500">
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
                    <ul className="flex flex-col gap-1">
                      <p
                        onClick={() => cambiarEstadoModal9(!estadoModal9)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.ECYSA")}
                      </p>
                      <EjecutivoModalN
                        estado={estadoModal9}
                        cambiarEstado={cambiarEstadoModal9}
                      />

                      <p
                        onClick={() => cambiarEstadoModal10(!estadoModal10)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.CySDRySO")}
                      </p>
                      <CySModalN
                        estado={estadoModal10}
                        cambiarEstado={cambiarEstadoModal10}
                      />

                      <p
                        onClick={() => cambiarEstadoModal11(!estadoModal11)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.Contabilidad")}
                      </p>
                      <ContabilidadModalN
                        estado={estadoModal11}
                        cambiarEstado={cambiarEstadoModal11}
                      />

                      <p
                        onClick={() => cambiarEstadoModal12(!estadoModal12)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
                      >
                        {t("EO.specialities-2.ADLOA")}
                      </p>
                      <AdministracionModal
                        estado={estadoModal12}
                        cambiarEstado={cambiarEstadoModal12}
                      />

                      <p
                        onClick={() => cambiarEstadoModal13(!estadoModal13)}
                        className="my-2 shadow-md dark:shadow-White shadow-black cursor-pointer rounded-lg bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Atlantis"
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
        </Suspense>
    );
}
export default Especialidades;