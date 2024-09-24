import React, { useState } from "react";
import "../CSS/EventsToolbar.css"
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
let loginAdmin = false;
dayjs.locale("es");

export default function Events() {
  const localizer = dayjsLocalizer(dayjs);
  const { t } = useTranslation("information");
  const [estadoAdd, setEstadoAdd] = useState(false);
  function manejarEstadoAdd() {
    setEstadoAdd(!estadoAdd);
  }

  const [EventsDiurno, setEventsDiurno] = useState(true);
  const [EventsNocturno, setEventsNocturno] = useState(false);

  function cambiarHorario() {
    setEventsDiurno(!EventsDiurno);
    setEventsNocturno(!EventsNocturno);
  }


  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos al backend");

    const nuevoEvento = {
      title,
      start,
      end,
    };

    try {
      console.log(nuevoEvento);
      const response = await fetch(`http://localhost:3001/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoEvento),
      });
      if (!response.ok) {
        throw new Error(`Error al almacenar el evento en la base de datos`);
      }

      const data = await response.json();
      alert(`Evento guardado correctamente`, data);
      setTitle(``);
      setStart(``);
      setEnd(``);
    } catch (error) {
      console.log(`Error al enviar el evento`);
    }
  };

  const [eventos, setEventos] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/events`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos del servidor!!");
      }

      const data = await response.json();
      setEventos(
        data.map((evento) => ({
          title: evento.title,
          start: new Date(evento.start),
          end: new Date(evento.end),
        })),
      );
    } catch (error) {
      console.log(`Error al obtener los eventos`);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  console.log(eventos);

  return (
    <div className="relative">
      {loginAdmin && (
        <div className="absolute right-[15%] top-0 flex gap-8">
          <button
            onClick={manejarEstadoAdd}
            className="rounded-lg bg-Atlantis p-3 text-White transition-colors duration-200 hover:bg-Fuscous hover:text-White md:text-xl"
          >
            {t("Buttons.Add")}
          </button>
          <button className="rounded-lg bg-yellow-500 p-3 text-White transition-colors duration-200 hover:bg-Fuscous hover:text-White md:text-xl">
            {t("Buttons.Edit")}
          </button>
          <button className="rounded-lg bg-red-500 p-3 text-White transition-colors duration-200 hover:bg-Fuscous hover:text-White md:text-xl">
            {t("Buttons.Delete")}
          </button>
        </div>
      )}

      {estadoAdd && loginAdmin && (
        <section className="z-50 m-auto rounded-xl border-8 border-Atlantis bg-White transition-transform duration-200 md:w-[20%]">
          <form
            action="#"
            className="flex flex-col p-4 text-xl"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Titulo">Titulo del evento</label>
            <input
              className="rounded-xl bg-Atlantis p-2 text-White"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="fechaInicio">Fecha inicial del evento</label>
            <input
              className="rounded-xl bg-Atlantis p-2 text-White"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <label htmlFor="Fecha">Fecha final del evento</label>
            <input
              className="rounded-xl bg-Atlantis p-2 text-White"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <div className="my-8 flex justify-center gap-8">
              <button type="submit">Enviar informacion</button>
            </div>
          </form>
        </section>
      )}

      <div></div>
      <h1 className="pt-2 text-center text-2xl font-bold text-Atlantis md:text-3xl">
        {t("Events")}
      </h1>

      <div className="mt-4 flex items-center justify-center">
        <button onClick={cambiarHorario} className="rounded-l-xl bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Fuscous md:text-3xl">
          {t("EO.timeDiurno")}
        </button>
        <button onClick={cambiarHorario} className="rounded-r-xl bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Fuscous md:text-3xl">
          {t("EO.timeNocturna")}
        </button>
      </div>

      <section className="m-auto my-12 h-[75vh] w-[90%] overflow-hidden rounded-xl text-lg md:h-[100vh] md:text-2xl lg:pt-2">
        {EventsDiurno && (
          <Calendar
            localizer={localizer}
            events={eventos}
            messages={
              dayjs.locale() === "es"
                ? {
                    next: "Siguiente",
                    previous: "Anterior",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                  }
                : {
                    next: "Next",
                    previous: "Previous",
                    today: "Today",
                    month: "Month",
                    week: "Week",
                    day: "Day",
                  }
            }
            formats={{
              dayHeaderFormat: (date) => {
                return dayjs(date).format("ddd/DD/MM/YYYY");
              },
              monthHeaderFormat: (date) => {
                return dayjs(date).format("ddd/D/MM/YYYY");
              },
            }}
            className="bg-Sycamore p-4 text-White rounded-xl"
          />
        )}

        {EventsNocturno && (
          <Calendar
            localizer={localizer}
            events=""
            messages={
              dayjs.locale() === "es"
                ? {
                    next: "Siguiente",
                    previous: "Anterior",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                  }
                : {
                    next: "Next",
                    previous: "Previous",
                    today: "Today",
                    month: "Month",
                    week: "Week",
                    day: "Day",
                  }
            }
            formats={{
              dayHeaderFormat: (date) => {
                return dayjs(date).format("ddd/DD/MM/YYYY");
              },
              monthHeaderFormat: (date) => {
                return dayjs(date).format("ddd/D/MM/YYYY");
              },
            }}
            className="bg-Blue-Dianne text-White p-4 rounded-xl"
          />
        )}
      </section>
    </div>
  );
}
