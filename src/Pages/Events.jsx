import React, { useState } from "react";
import "../CSS/EventsToolbars.css";
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

  const date = new Date();
  const year = date.getFullYear();

  const [selectedEventDiurno, setSelectedEventDiurno] = useState(null);
  const [informacionEventoDiurno, setInformacionEventoDiurno] = useState(false);
  const [selectedEventNocturno, setSelectedEventNocturno] = useState(null);
  const [informacionEventoNocturno, setInformacionEventoNocturno] = useState(false);

  const handleSelectEventDiurno = (event) => {
    setSelectedEventDiurno(event);
    setInformacionEventoDiurno(!informacionEventoDiurno);
  };

  const handleSelectEventNocturno = (event) => {
    setSelectedEventNocturno(event);
    setInformacionEventoNocturno(!informacionEventoNocturno);
  };

  const EventosDiurno = [
    // Periodos del año lectivo
    {
      title: "I Período | X | XI",
      start: dayjs(`${year}-02-08`).toDate(),
      end: dayjs(`${year}-06-28`).toDate(),
    },
    {
      title: "II Período | X | XI",
      start: dayjs(`${year}-07-15`).toDate(),
      end: dayjs(`${year}-12-13`).toDate(),
    },
    {
      title: "I Período XII",
      start: dayjs(`${year}-02-06`).toDate(),
      end: dayjs(`${year}-05-17`).toDate(),
    },
    {
      title: "II Período XII",
      start: dayjs(`${year}-05-20`).toDate(),
      end: dayjs(`${year}-08-30`).toDate(),
    },
    // Fechas conmemorativas y efemérides
    {
      title: "Batalla de Santa Rosa",
      start: dayjs(`${year}-03-30`).toDate(),
      end: dayjs(`${year}-03-30`).toDate(),
    },
    {
      title: "Día Nacional del Deporte",
      start: dayjs(`${year}-03-31`).toDate(),
      end: dayjs(`${year}-03-31`).toDate(),
    },
    {
      title: "Aniversario de la Batalla de Rivas",
      start: dayjs(`${year}-04-11`).toDate(),
      end: dayjs(`${year}-04-11`).toDate(),
    },
    {
      title: "Aniversario de la Anexión del Partido de Nicoya",
      start: dayjs(`${year}-07-25`).toDate(),
      end: dayjs(`${year}-07-25`).toDate(),
    },
    {
      title: "Semana Cívica",
      start: dayjs(`${year}-09-09`).toDate(),
      end: dayjs(`${year}-09-13`).toDate(),
    },
    {
      title: "Recorrido de la Antorcha de la Libertad",
      start: dayjs(`${year}-09-14`).toDate(),
      end: dayjs(`${year}-09-14`).toDate(),
    },
    {
      title: "Aniversario de la Independencia Nacional",
      start: dayjs(`${year}-09-15`).toDate(),
      end: dayjs(`${year}-09-15`).toDate(),
    },
    {
      title: "Día de las Culturas",
      start: dayjs(`${year}-10-12`).toDate(),
      end: dayjs(`${year}-10-12`).toDate(),
    },
    {
      title: "Abolición del Ejército",
      start: dayjs(`${year}-12-01`).toDate(),
      end: dayjs(`${year}-12-01`).toDate(),
    },
    // Pruebas Técnicas, Académicas y Comprensivas I Período Décimo y Undécimo
    {
      title: "I Pruebas Académicas | X | XI",
      start: dayjs(`${year}-04-22`).toDate(),
      end: dayjs(`${year}-04-26`).toDate(),
    },
    {
      title: "I Pruebas Comprensivas | X | XI",
      start: dayjs(`${year}-02-26`).toDate(),
      end: dayjs(`${year}-03-01`).toDate(),
    },
    {
      title: "II Pruebas Académicas | X | XI",
      start: dayjs(`${year}-06-24`).toDate(),
      end: dayjs(`${year}-06-28`).toDate(),
    },
    {
      title: "I Pruebas Técnicas | X | XI",
      start: dayjs(`${year}-02-17`).toDate(),
      end: dayjs(`${year}-06-21`).toDate(),
    },
    // Pruebas Técnicas, Académicas y Comprensivas II Período Décimo y Undécimo
    {
      title: "II Pruebas Académicas | X | XI",
      start: dayjs(`${year}-08-26`).toDate(),
      end: dayjs(`${year}-08-30`).toDate(),
    },
    {
      title: "II Pruebas Comprensivas | X | XI",
      start: dayjs(`${year}-08-19`).toDate(),
      end: dayjs(`${year}-08-23`).toDate(),
    },
    {
      title: "II Pruebas Académicas | X | XI",
      start: dayjs(`${year}-11-04`).toDate(),
      end: dayjs(`${year}-11-08`).toDate(),
    },
    {
      title: "II Pruebas Técnicas | X | XI",
      start: dayjs(`${year}-10-28`).toDate(),
      end: dayjs(`${year}-11-01`).toDate(),
    },
    // Pasantías y Pruebas de Ampliación
    {
      title: "Pasantía XI",
      start: dayjs(`${year}-09-16`).toDate(),
      end: dayjs(`${year}-09-27`).toDate(),
    },
    {
      title: "I Pruebas de Ampliación | X | XI",
      start: dayjs(`${year}-12-02`).toDate(),
      end: dayjs(`${year}-12-11`).toDate(),
    },
    {
      title: "II Pruebas de Ampliación | X | XI",
      start: dayjs(`${year + 1}-02-03`).toDate(),
      end: dayjs(`${year + 1}-02-07`).toDate(),
    },
    // Pruebas Técnicas, Académicas y Comprensivas I Período Duodécimo
    {
      title: "I Pruebas Académicas | XII",
      start: dayjs(`${year}-03-18`).toDate(),
      end: dayjs(`${year}-03-22`).toDate(),
    },
    {
      title: "Prueba Nacional Estandarizada Diagnóstica | XII",
      start: dayjs(`${year}-04-03`).toDate(),
      end: dayjs(`${year}-04-09`).toDate(),
    },
    {
      title: "II Pruebas Académicas | XII",
      start: dayjs(`${year}-05-06`).toDate(),
      end: dayjs(`${year}-05-10`).toDate(),
    },
    {
      title: "I Pruebas Técnicas | XII",
      start: dayjs(`${year}-05-13`).toDate(),
      end: dayjs(`${year}-05-17`).toDate(),
    },
    {
      title: "Entrega de Notas I Período | XII",
      start: dayjs(`${year}-05-31`).toDate(),
      end: dayjs(`${year}-05-31`).toDate(),
    },
    // Pruebas Técnicas, Académicas y Comprensivas II Período Duodécimo
    {
      title: "Prueba Nacional de Lenguas Extranjeras | XII",
      start: dayjs(`${year}-06-03`).toDate(),
      end: dayjs(`${year}-06-07`).toDate(),
    },
    {
      title: "I Pruebas Académicas | XII",
      start: dayjs(`${year}-06-24`).toDate(),
      end: dayjs(`${year}-06-28`).toDate(),
    },
    {
      title: "II Pruebas Académicas | XII",
      start: dayjs(`${year}-08-12`).toDate(),
      end: dayjs(`${year}-08-16`).toDate(),
    },
    {
      title: "II Pruebas Técnicas | XII",
      start: dayjs(`${year}-08-19`).toDate(),
      end: dayjs(`${year}-08-23`).toDate(),
    },
    {
      title: "Entrega de Notas II Período | XII",
      start: dayjs(`${year}-09-13`).toDate(),
      end: dayjs(`${year}-09-13`).toDate(),
    },
    {
      title: "Prueba de Especialidad Técnica | XII",
      start: dayjs(`${year}-10-01`).toDate(),
      end: dayjs(`${year}-10-01`).toDate(),
    },
    {
      title: "Pruebas Nacionales Estandarizadas Sumativas | XII",
      start: dayjs(`${year}-09-17`).toDate(),
      end: dayjs(`${year}-09-23`).toDate(),
    },
    {
      title: "Práctica Supervisada | XII",
      start: dayjs(`${year}-10-07`).toDate(),
      end: dayjs(`${year}-11-29`).toDate(),
    },
    {
      title: "Primera Prueba de Ampliación | XII",
      start: dayjs(`${year}-09-05`).toDate(),
      end: dayjs(`${year}-09-10`).toDate(),
    },
    {
      title: "Segunda Prueba de Ampliación | XII",
      start: dayjs(`${year}-12-02`).toDate(),
      end: dayjs(`${year}-12-09`).toDate(),
    },
    {
      title: "Entrega de informes al hogar | X | XI | Segundo periodo",
      start: dayjs(`${year}-12-12`).toDate(),
      end: dayjs(`${year}-12-12`).toDate(),
    },
    {
      title: "Finalizacion del curso lectivo | XII",
      start: dayjs(`${year}-12-13`).toDate(),
      end: dayjs(`${year}-12-13`).toDate(),
    },
    {
      title: "Ratificación de matricula",
      start: dayjs(`${year}-12-02`).toDate(),
      end: dayjs(`${year}-12-03`).toDate(),
    },
    {
      title: "Graduacion | XII",
      start: dayjs(`${year}-12-16T13:00:00`).toDate(),
      end: dayjs(`${year}-12-16`).toDate(),
    }
];

  const EventosNocturno = [
    {
      title: `Inicio del proceso de admisión para el curso lectivo ${year + 1}`,
      start: dayjs(`${year}-10-10`).toDate(),
      end: dayjs(`${year}-12-04`).toDate(),
    },{
      title: `Demostración de aptitudes vocacionales y entrevistas`,
      start: dayjs(`${year}-10-10`).toDate(),
      end: dayjs(`${year}-10-10`).toDate(),
    },
    {
      title: `Pre-matricula primer ingreso, I nivel`,
      start: dayjs(`${year}-10-30T18:00:00`).toDate(),
      end: dayjs(`${year}-10-30T20:30:00`).toDate(),
    },
    {
      title: `Pre-matrícula I nivel, II nivel y III nivel`,
      start: dayjs(`${year}-10-31T18:00:00`).toDate(),
      end: dayjs(`${year}-10-31T20:30:00`).toDate(),
    },{
      title: `Matrícula`,
      start: dayjs(`${year}-12-03T18:00:00`).toDate(),
      end: dayjs(`${year}-12-04T20:30:00`).toDate(),
    }
  ];


  return (
    <div className="relative">
      {selectedEventDiurno && informacionEventoDiurno && (
        <div className="absolute z-50 flex h-[100%] w-[100%] items-center justify-center bg-[rgba(0,0,0,.5)]">
          <div className="selected-event-details flex w-[90%] flex-col justify-center gap-2 rounded-xl bg-White p-12 py-24 text-black transition-colors duration-300 dark:bg-black dark:text-White lg:w-1/2 border-Atlantis border-4 dark:border-White">
            <h1 className="text-center text-xl font-bold text-Atlantis lg:text-3xl">
              Detalles del evento
            </h1>
            <div className="flex gap-2">
              <h2 className="text-xl font-bold text-Sycamore lg:text-3xl">
                Título:
              </h2>
              <p className="text-balance text-xl lg:text-2xl">
                {selectedEventDiurno.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-Sycamore lg:text-3xl">
                Inicio:
              </h3>
              <p className="text-balance text-xl lg:text-2xl">
                {dayjs(selectedEventDiurno.start).format("DD/MM/YYYY hh:mm")}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold text-Sycamore lg:text-3xl">
                Fin:
              </h4>
              <p className="text-balance text-xl lg:text-2xl">
                {dayjs(selectedEventDiurno.end).format("DD/MM/YYYY hh:mm")}
              </p>
            </div>
          </div>
          <i
            onClick={handleSelectEventDiurno}
            className="fa-sharp fa-solid fa-xmark absolute right-[10%] top-[37%] cursor-pointer rounded-full bg-Atlantis px-2 py-1 text-4xl text-White md:right-[28%] md:top-[35%] md:p-2 md:text-5xl lg:px-6"
          ></i>
        </div>
      )}

{selectedEventNocturno && informacionEventoNocturno && (
        <div className="absolute z-50 flex h-[100%] w-[100%] items-center justify-center bg-[rgba(0,0,0,.5)]">
          <div className="selected-event-details flex w-[90%] flex-col justify-center gap-2 rounded-xl bg-White p-12 py-24 text-black transition-colors duration-300 dark:bg-black dark:text-White lg:w-1/2 border-Blue-Dianne border-4 dark:border-White">
            <h1 className="text-center text-xl font-bold text-Blue-Dianne lg:text-3xl">
              Detalles del evento
            </h1>
            <div className="flex gap-2">
              <h2 className="text-xl font-bold text-Blue-Dianne lg:text-3xl">
                Título:
              </h2>
              <p className="text-balance text-xl lg:text-2xl">
                {selectedEventNocturno.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-Blue-Dianne lg:text-3xl">
                Inicio:
              </h3>
              <p className="text-balance text-xl lg:text-2xl">
                {dayjs(selectedEventNocturno.start).format("DD/MM/YYYY hh:mm")}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold text-Blue-Dianne lg:text-3xl">
                Fin:
              </h4>
              <p className="text-balance text-xl lg:text-2xl">
                {dayjs(selectedEventNocturno.end).format("DD/MM/YYYY hh:mm")}
              </p>
            </div>
          </div>
          <i
            onClick={handleSelectEventNocturno}
            className="fa-sharp fa-solid fa-xmark absolute right-[10%] top-[37%] cursor-pointer rounded-full bg-Blue-Dianne px-2 py-1 text-4xl text-White md:right-[28%] md:top-[35%] md:p-2 md:text-5xl lg:px-6"
          ></i>
        </div>
      )}
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
        <button
          onClick={cambiarHorario}
          className="rounded-l-xl bg-Atlantis p-2 text-2xl text-White transition-colors duration-200 hover:bg-Fuscous md:text-3xl"
        >
          {t("EO.timeDiurno")}
        </button>
        <button
          onClick={cambiarHorario}
          className="rounded-r-xl bg-Blue-Dianne p-2 text-2xl text-White transition-colors duration-200 hover:bg-Fuscous md:text-3xl"
        >
          {t("EO.timeNocturna")}
        </button>
      </div>

      <section className="m-auto my-12 h-[100vh] w-[90%] overflow-hidden rounded-xl text-lg md:h-[100vh] md:text-2xl lg:pt-2 font-Poppins">
        {EventsDiurno && (
          <Calendar
            localizer={localizer}
            events={EventosDiurno}
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
                return dayjs(date).format("dddd DD / MMMM / YYYY");
              },
              monthHeaderFormat: (date) => {
                return dayjs(date).format(
                  "dddd DD / MMMM / YYYY | DD / MM / YY",
                );
              },
            }}
            onSelectEvent={handleSelectEventDiurno}
            className="rounded-xl bg-Sycamore p-4 text-sm text-White lg:text-lg"
          />
        )}

        {EventsNocturno && (
          <Calendar
            localizer={localizer}
            events={EventosNocturno}
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
                return dayjs(date).format("dddd DD / MMMM / YYYY");
              },
              monthHeaderFormat: (date) => {
                return dayjs(date).format(
                  "dddd DD / MMMM / YYYY | DD / MM / YY",
                );
              },
            }}
            onSelectEvent={handleSelectEventNocturno}
            className="rounded-xl bg-Blue-Dianne p-4 text-White text-sm lg:text-lg"
          />
        )}
      </section>
    </div>
  );
}
