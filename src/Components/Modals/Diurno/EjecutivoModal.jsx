import React from "react";
import Ejecutivo from "../../../JSON/Diurno/Ejecutivo.json";

export default function EjecutivoModal({ estado, cambiarEstado }) {
  return (
    <>
      {estado && (
        <section className="absolute left-0 right-0 h-[200vh] w-[100%] rounded-xl bg-[rgba(0,0,0,.5)] md:h-[100vh]">
          <div className="text-md absolute bottom-0 left-0 right-0 top-0 m-auto h-[180vh] w-[90vw] rounded-xl bg-White p-12 md:h-[90vh] md:w-[90vw] md:text-2xl">
            <h1 className="p-2 text-center text-3xl font-bold text-Sycamore md:p-4 md:text-4xl">
              {Ejecutivo.title}
            </h1>
            <div className="flex grid-cols-2 flex-col items-center justify-center md:text-lg lg:grid">
              <div>
                <table className="overflow-hidden rounded-xl md:m-4">
                  <tr className="bg-Atlantis">
                    <td className="text-center text-White md:px-12 md:py-2">
                      Sub-Área
                    </td>
                    <td className="px-6 py-1 text-center text-White md:px-12 md:py-2">
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
                    {Ejecutivo.Subarea.map((subarea, index) => (
                      <tr key={index}>
                        <td className="border-2 border-white bg-Sycamore px-6 py-1 text-White md:p-2">
                          {subarea.GCyCPESAC ||
                            subarea.DDPGLIyECE ||
                            subarea.EeIALECySAC ||
                            subarea.EOTBaCSE}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-6 py-1 text-White md:p-2">
                          {subarea.Horas.Decimo}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-6 py-1 text-White md:p-2">
                          {subarea.Horas.Undecimo}
                        </td>
                        <td className="border-2 border-white bg-Sycamore px-6 py-1 text-White md:p-2">
                          {subarea.Horas.Duodecimo}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tr className="bg-Atlantis text-center text-white">
                    <td className="md:px-12 md:py-2">Horas totales</td>
                    <td className="md:px-12 md:py-2">
                      {Ejecutivo.Total.Decimo}{" "}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Ejecutivo.Total.Undecimo}{" "}
                    </td>
                    <td className="md:px-12 md:py-2">
                      {Ejecutivo.Total.Duodecimo}{" "}
                    </td>
                  </tr>
                </table>
              </div>

              <section className="flex flex-col gap-8 md:flex-row md:justify-evenly">
                <section>
                  <h2 className="text-2xl font-bold text-Atlantis">
                    Posibles Puestos de Trabajo
                  </h2>
                  <ul>
                    {Ejecutivo.posiblesPuestos.map((puesto, index) => (
                      <li
                        className="my-4 rounded-xl bg-Atlantis px-6 py-1 text-white md:p-2"
                        key={index}
                      >
                        {puesto}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-Atlantis">
                    Posibles Empresas
                  </h2>
                  <ul>
                    {Ejecutivo.posiblesEmpresas.map((empresa, index) => (
                      <li
                        className="my-4 rounded-xl bg-Atlantis px-6 py-1 text-white md:p-2"
                        key={index}
                      >
                        {empresa}
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
              <i
                onClick={() => cambiarEstado(false)}
                class="fa-sharp fa-solid fa-xmark absolute right-1 top-1 cursor-pointer rounded-full px-6 py-1 text-4xl hover:bg-Atlantis hover:text-White md:right-12 md:top-4 md:p-2 md:text-5xl"
              ></i>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
