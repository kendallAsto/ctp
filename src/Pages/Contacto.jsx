import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';

export default function Contacto() {
  const { t } = useTranslation("contacto");

  const Contacto = () => {
    const [messages, setMessages] = useState([
      { sender: 'bot', text: t("Contact.msj") }
    ]);

    const [options, setOptions] = useState([

    ]);

    // Actualizamos las opciones y mensajes cuando cambia el idioma
    useEffect(() => {
      setMessages([{ sender: 'bot', text: t("Contact.msj") }]);
      setOptions([
        { label: t('Contact.op1'), value: t('Contact.op1') },
        { label: t('Contact.op2'), value: t('Contact.op2') },
        { label: t('Contact.op6'), value: t('Contact.op6') },
        { label: t('Contact.op3'), value: t('Contact.op3') },
        { label: t('Contact.op4'), value: t('Contact.op4') },
        { label: t('Contact.op5'), value: t('Contact.op5') }
      ]);
    }, []);

    const handleOptionClick = (optionValue) => {
      if (optionValue === t('Contact.op5')) {
        window.open('https://wa.me/50661554687', '_blank'); // Redirigir al chat de WhatsApp
        return;
      }

      const botResponse = getBotResponse(optionValue);
      const followUpMessage = { sender: 'bot', text: t('Contact.followUp') };

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: optionValue },
        botResponse,
        followUpMessage
      ]);
    };

    const getBotResponse = (option) => {
      switch (option) {
        case t("Contact.op1"):
          return { sender: 'bot', text: t('Contact.response1') };
        case t('Contact.op2'):
          return { 
            sender: 'bot', text: t('Contact.response2'), link: t('Contact.link1')};
        case t('Contact.op3'):
          return { sender: 'bot', text: t('Contact.response3') };
        case t('Contact.op4'):
          return { sender: 'bot', text: t('Contact.response4'), link: t('Contact.link2') };
        case t('Contact.op6'):
          return { sender: 'bot', text: t('Contact.response5'), link: t('Contact.link3') };
        default:
          return { sender: 'bot', text: t('Contact.default') };
      }
    };

    return (
      <div className="Container m-auto w-[90%] overflow-hidden transition-all duration-500">
        <h1 className="mb-12 text-center text-3xl font-extrabold text-Atlantis lg:text-4xl dark:text-emerald-300">
          {t("Contact.title")}
        </h1>
        <div className="chat-window flex flex-col justify-start bg-white rounded-lg border border-gray-300 w-11/12 max-w-lg h-96 mx-auto mb-5 p-5 overflow-y-auto shadow-lg dark:bg-gray-900 dark:border-gray-600">
          {messages.map((msg, index) => (
        <div
          key={index}
          className={`${
            msg.sender === 'bot' ? 'bg-pink-100 self-start' : 'bg-green-700 text-white self-end'
          } inline-block p-3 rounded-2xl mb-2 text-base max-w-[70%] break-words transition shadow-sm md:text-xl`}
        >
          {msg.text}
          {msg.link && (
          <div className="mt-2">
            <a 
              href={msg.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline"
            >
              {
                t("Contact.clic")
              }
            </a>
          </div>
          )}
        </div>
        ))}
      </div>

        <div className="options flex flex-wrap justify-center gap-2 mb-5">
          {options.map((option, index) => (
            <button
              key={index}
              className="px-6 py-2 text-lg bg-Atlantis dark:bg-emerald-400 text-white rounded-lg transition duration-300 hover:bg-emerald-400 dark:hover:bg-Atlantis shadow-md hover:shadow-lg dark:text-black md:text-2xl"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return <Contacto />;
}
