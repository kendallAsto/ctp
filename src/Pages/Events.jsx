import React, { useState } from "react";
import "../CSS/EventsToolbars.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
// Componente principal
export default function App() {
  const { i18n } = useTranslation();
  dayjs.locale(i18n.language)
  const { t } = useTranslation("events");
  const localizer = dayjsLocalizer(dayjs);
  const [estado, setEstado] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cambiar estado para bloquear/desbloquear fondo
  const cambiarEstado = (nuevoEstado) => {
    setEstado(nuevoEstado);
  };

  // Bloquear/desbloquear el scroll al abrir/cerrar el modal
  useEffect(() => {
    if (estado) {
      document.body.style.overflow = 'hidden'; // Bloquear el scroll
    } else {
      document.body.style.overflow = 'auto'; // Restaurar el scroll
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [estado]);
  // Función para manejar la selección de un evento
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    cambiarEstado(true); // Bloquear el fondo al abrir el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    cambiarEstado(false); // Desbloquear el fondo al cerrar el modal
  };

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
        }))
      );
    } catch (error) {
      console.log("Error al obtener los eventos");
    }
  };

  const calendarMessages = {
    next: t("calendar.next"),
    previous: t("calendar.previous"),
    today: t("calendar.today"),
    month: t("calendar.month"),
    week: t("calendar.week"),
    day: t("calendar.day"),
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <div>
      {/* Calendario */}
      <h1 className="mb-12 text-center text-3xl font-extrabold text-Atlantis lg:text-4xl dark:text-emerald-300">
        {t("calendar.title")}
      </h1>
      <section className="m-auto my-12 h-[130vh] w-[90%] overflow-hidden rounded-xl text-lg md:h-[150vh] md:text-2xl lg:pt-2 font-Poppins">
        <Calendar
          localizer={localizer}
          events={eventos}
          onSelectEvent={handleSelectEvent}
          className='rounded-xl bg-Sycamore p-4 text-sm text-White lg:text-lg dark:bg-Blue-Dianne'
          messages={
            calendarMessages
          }
          culture={i18n.language}
        />
      </section>
      
      
      {/* Modal de detalles del evento */}
      {isModalOpen && selectedEvent &&(
        
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.7)]">
          <div className="relative w-[80%] h-[60%] py- overflow-y-auto bg-white rounded-xl p-8 md:h-[80hv] md:w-[80%] dark:border-2 dark:border-White dark:bg-black">
            <h3 className="text-3xl font-bold text-center text-Sycamore md:text-4xl dark:text-Blue-Dianne">{t("calendar.eventDetails")}</h3>
            <p className="text-2xl font-bold text-center md:text-2xl dark:text-white">{t("calendar.eventTitle")} {selectedEvent.title}</p>
            <p className="text-2xl font-bold text-center md:text-2xl dark:text-white">{t("calendar.start")} {dayjs(selectedEvent.start).format('DD-MM-YYYY HH:mm')}</p>
            <p className="text-2xl font-bold text-center md:text-2xl dark:text-white">{t("calendar.end")} {dayjs(selectedEvent.end).format('DD-MM-YYYY HH:mm')}</p>
            {/* Botón para cerrar el modal */}
            <button className="fa-sharp fa-solid fa-xmark absolute rounded-full right-4 top-4 cursor-pointer text-4xl hover:bg-Atlantis hover:text-Sycamore p-2 dark:text-white" onClick={closeModal}></button>
          </div>
        </section>
      )}
    </div>
  );
}
