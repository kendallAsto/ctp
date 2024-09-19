import React from 'react'
import diseno from "../../JSON/Diurno/Diseno.json"

export default function DisenoModal({estado,cambiarEstado}) {
  return (
    <>
    {estado && <section className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,.5)] absolute  left-0 right-0">
      <div className="h-[90vh] w-[90vw] m-auto bg-White absolute top-0 left-0 right-0 bottom-0 rounded-xl p-12 text-2xl">
        <h1 className="text-4xl text-center p-4 text-Sycamore font-bold">
          {diseno.title}
        </h1>
        <div className="grid grid-cols-2">
          <div>
            <table className="m-4 rounded-xl overflow-hidden">
              <tr className="bg-Atlantis">
                <td className="text-White text-center py-2 px-12">Sub-Área</td>
                <td className="text-White text-center py-2 px-12">X</td>
                <td className="text-White text-center py-2 px-12">XI</td>
                <td className="text-White text-center py-2 px-12">XII</td>
              </tr>
              <tbody className="text-center">
                {diseno.Subarea.map((subarea, index) => (
                  <tr key={index}>
                    <td className="bg-Sycamore text-White p-2">
                      {subarea.DP ||
                        subarea.DT ||
                        subarea.Fotografia ||
                        subarea.DD ||
                        subarea.SDI ||
                        subarea.EFC}
                    </td>
                    <td className="bg-Sycamore text-White p-2">
                      {subarea.Horas.Decimo}
                    </td>
                    <td className="bg-Sycamore text-White p-2">
                      {subarea.Horas.Undecimo}
                    </td>
                    <td className="bg-Sycamore text-White p-2">
                      {subarea.Horas.Duodecimo}
                    </td>
                  </tr>
                ))}
              </tbody>

              <tr className="text-center bg-Atlantis text-white">
                <td className="py-2 px-12">Horas totales</td>
                <td className="py-2 px-12">{diseno.Total.Decimo} </td>
                <td className="py-2 px-12">{diseno.Total.Undecimo} </td>
                <td className="py-2 px-12">{diseno.Total.Duodecimo} </td>
              </tr>
            </table>
          </div>

          <section className="flex justify-evenly">
            <section>
              <h2 className="font-bold text-Atlantis">Posibles Puestos de Trabajo</h2>
              <ul>
                {diseno.posiblesPuestos.map((puesto, index) => (
                  <li className="bg-Atlantis text-white rounded-xl p-2 my-4" key={index}>{puesto}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-Atlantis">Posibles Empresas</h2>
              <ul>
                {diseno.posiblesEmpresas.map((empresa, index) => (
                  <li className="bg-Atlantis text-white rounded-xl p-2 my-4" key={index}>{empresa}</li>
                ))}
              </ul>
            </section>
          </section>
          <i onClick={() => cambiarEstado(false)} class="fa-sharp fa-solid fa-xmark text-5xl absolute top-4 right-12 hover:bg-Atlantis hover:text-White p-2 rounded-full cursor-pointer"></i>
        </div>
      </div>
    </section>}
    </>
  )
}
