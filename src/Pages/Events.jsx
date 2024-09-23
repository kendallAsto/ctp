import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useTranslation } from "react-i18next";
import BTNS from "../Components/BTNS";
dayjs.locale('es');
let loginAdmin = false;
const Eventos = [
  {
    start: dayjs("2024-12-3").toDate(),
    end: dayjs("2024-12-31").toDate(),
    title: "Navidad",
  },
];
function addEvents() {}
function deleteEvents() {}

export default function Events() {
  const localizer = dayjsLocalizer(dayjs);
  const { t } = useTranslation("information");
  const [estadoAdd, setEstadoAdd] = useState(false);
  function manejarEstadoAdd() {
    setEstadoAdd(!estadoAdd);
  }

  return (
    <div className="relative">
      {loginAdmin && (
        <div className="flex gap-8 absolute top-0 right-[15%]">
          <button onClick={manejarEstadoAdd} className="bg-Atlantis md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White">{t("Buttons.Add")}</button>
          <button className="bg-yellow-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White">{t("Buttons.Edit")}</button>
          <button className="bg-red-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White">{t("Buttons.Delete")}</button>
        </div>
      )}

      {estadoAdd && loginAdmin && (
        <section className="bg-White border-Atlantis border-8 rounded-xl md:w-[20%] m-auto z-50 transition-transform duration-200">
          <form action="#" className="flex flex-col p-4 text-xl">
            <label htmlFor="Titulo">Titulo del evento</label>
            <input className="bg-Atlantis text-White p-2 rounded-xl" type="text" />
            <label htmlFor="fechaInicio">Fecha inicial del evento</label>
            <input
              className="bg-Atlantis text-White p-2 rounded-xl"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
            />
            <label htmlFor="Fecha">Fecha final del evento</label>
            <input
              className="bg-Atlantis text-White p-2 rounded-xl"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
            />
            <div className="flex my-8 justify-center gap-8">
              <BTNS tipo="Accept" texto="Aceptar" />
              <BTNS tipo="Cancel" texto="Cancelar" />
            </div>
          </form>
        </section>
      )}

      <div>
      </div>
      <h1 className=" text-2xl  pt-12 text-Atlantis md:text-3xl font-bold text-center">
        {t("Events")}
      </h1>

      <section className="text-lg w-[90%] h-[75vh] md:h-[95vh] lg:w-[80%] m-auto my-12 rounded-xl overflow-hidden md:text-2xl">
        <Calendar
          localizer={localizer}
          // views={["month","week","day"]}
          events={Eventos}
          messages={{
            next: "Siguiente",
            previous: "Anterior",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
          formats={{
            dayHeaderFormat: (date) => {
              return dayjs(date).format("ddd/DD/MM/YYYY");
            },
            monthHeaderFormat: (date) => {
              return dayjs(date).format("ddd/D/MM/YYYY");
            },
          }}
          className="bg-Sycamore p-4"
        />
      </section>
    </div>
  );
}
