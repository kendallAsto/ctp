import React, { useEffect } from "react";
import Diseno from "../../../JSON/Diurno/Diseno_es.json";
import { useTranslation } from "react-i18next";

export default function DisenoModal({ estado, cambiarEstado }) {
  const { t } = useTranslation("Diseno");

  // Bloquea el scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (estado) {
      document.body.style.overflow = 'hidden'; // Bloquear el scroll
    } else {
      document.body.style.overflow = 'auto'; // Restaurar el scroll
    }

    // Quitar al cerrar el modal
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [estado]);

  return (
    <>
      {estado && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.7)]">
          <div className="relative w-[98%] h-[98%] py-2 overflow-y-auto bg-white rounded-xl p-8 md:h-[80%] md:w-[80%] dark:border-2 dark:border-White dark:bg-black">
            <h1 className="p-2 text-center text-3xl font-bold text-Sycamore md:p-4 md:text-4xl">
              {t("title")}
            </h1>
            <section className="m-auto my-12 flex w-[100%] flex-col justify-center gap-4 text-lg lg:w-[100%] lg:flex-row lg:text-xl">
              <div className="overflow-hidden rounded-xl">
                <table className="overflow-hidden rounded-xl md:m-4">
                  <tr className="bg-Atlantis">
                    <td className="text-center text-White md:px-12 md:py-2">
                      {t("subarea-title")}
                    </td>
                    <td className="text-center text-White md:px-12 md:py-2">
                      X
                    </td>
                    <td className="text-center text-White md:px-12 md:py-2">
                      XI
                    </td>
                    <td className="text-center text-White md:px-12 md:py-2">
                      XII
                    </td>
                  </tr>
                  <tbody className="text-center">
                    {Diseno.Subarea.map((subarea, index) => (
                      <tr key={index}>
                        <td className="border-2 border-white bg-Sycamore py-1 text-White dark:border-black md:p-2 md:px-8">
                          {t(`Subarea.${index}.label`)}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-2 py-1 text-White dark:border-black md:p-2 md:px-8">
                          {subarea.Horas.Decimo}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-2 py-1 text-White dark:border-black md:p-2 md:px-8">
                          {subarea.Horas.Undecimo}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-2 py-1 text-White dark:border-black md:p-2 md:px-8">
                          {subarea.Horas.Duodecimo}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tr className="bg-Atlantis text-center text-white">
                    <td className="md:px-12 md:py-2">{t("horas-totales")}</td>
                    <td className="md:px-12 md:py-2">
                      {Diseno.Total.Decimo}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Diseno.Total.Undecimo}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Diseno.Total.Duodecimo}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="overflow-hidden rounded-xl">
                <h2 className="text-2xl font-bold text-Atlantis">
                  {t("puestos-title")}
                </h2>
                <ul>
                  {Diseno.posiblesPuestos.map((puesto, index) => (
                    <li
                      className="my-4 rounded-xl bg-Atlantis px-6 py-1 text-white md:p-2"
                      key={index}
                    >
                      {t(`posiblesPuestos.${index}.label`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl">
                <h2 className="text-2xl font-bold text-Atlantis">
                  {t("empresas-title")}
                </h2>
                <ul>
                  {Diseno.posiblesEmpresas.map((empresa, index) => (
                    <li
                      className="my-4 rounded-xl bg-Atlantis px-6 py-1 text-white md:p-2"
                      key={index}
                    >
                      {t(`posiblesEmpresas.${index}.label`)}
                    </li>
                  ))}
                </ul>
              </div>
              <i
                onClick={() => cambiarEstado(false)}
                className="fa-sharp fa-solid fa-xmark absolute right-1 top-1 cursor-pointer rounded-full px-6 py-1 text-4xl hover:bg-Atlantis hover:text-White md:right-12 md:top-4 md:p-2 md:text-5xl dark:text-white"
              ></i>
            </section>
          </div>
        </section>
      )}
    </>
  );
}
