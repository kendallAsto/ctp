import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
let loginAdmin = true;
dayjs.locale("es");

export default function Events() {
  const localizer = dayjsLocalizer(dayjs);
  const { t } = useTranslation("information");
  const [estadoAdd, setEstadoAdd] = useState(false);
  function manejarEstadoAdd() {
    setEstadoAdd(!estadoAdd);
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
      alert(`Evento guardado correctamente`,data);
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
      setEventos(data.map(evento => ({
        title: evento.title,
        start: new Date(evento.start),
        end: new Date(evento.end),
      })));
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
        <div className="flex gap-8 absolute top-0 right-[15%]">
          <button
            onClick={manejarEstadoAdd}
            className="bg-Atlantis md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White"
          >
            {t("Buttons.Add")}
          </button>
          <button className="bg-yellow-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White">
            {t("Buttons.Edit")}
          </button>
          <button className="bg-red-500 md:text-xl text-White p-3 rounded-lg hover:bg-Fuscous transition-colors duration-200 hover:text-White">
            {t("Buttons.Delete")}
          </button>
        </div>
      )}

      {estadoAdd && loginAdmin && (
        <section className="bg-White border-Atlantis border-8 rounded-xl md:w-[20%] m-auto z-50 transition-transform duration-200">
          <form
            action="#"
            className="flex flex-col p-4 text-xl"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Titulo">Titulo del evento</label>
            <input
              className="bg-Atlantis text-White p-2 rounded-xl"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="fechaInicio">Fecha inicial del evento</label>
            <input
              className="bg-Atlantis text-White p-2 rounded-xl"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <label htmlFor="Fecha">Fecha final del evento</label>
            <input
              className="bg-Atlantis text-White p-2 rounded-xl"
              type="date"
              name="fechaInicio"
              id="fechaInicio"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <div className="flex my-8 justify-center gap-8">
              <button type="submit">Enviar informacion</button>
            </div>
          </form>
        </section>
      )}

      <div></div>
      <h1 className=" text-2xl  pt-12 text-Atlantis md:text-3xl font-bold text-center">
        {t("Events")}
      </h1>

      <section className="text-lg w-[90%] h-[75vh] md:h-[100vh] lg:w-[80%] m-auto my-12 rounded-xl overflow-hidden md:text-2xl lg:pt-8">
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
          className="bg-Sycamore p-4"
        />
      </section>
    </div>
  );
}
