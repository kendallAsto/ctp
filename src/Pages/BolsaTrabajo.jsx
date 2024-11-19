import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const { t } = useTranslation("Bolsa");
  // Función para obtener los empleos de la API
  useEffect(() => {
    fetch('http://localhost:3001/api/empleos')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error al obtener los empleos:", error));
  }, []);


  return (
        <>
          <h1 className="mb-12 text-center text-3xl font-extrabold text-Atlantis lg:text-4xl dark:text-emerald-300">
            {t("title")}
          </h1>
          <br />
          <div>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:w-[100%] w-[90%] my-6"
              >
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={job.imagen}
                      alt="Logo Empresa"
                    />
                  </div>
                  <div className="p-8">
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{t("subtitle1")}</p>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {job.titulo}
                    </div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{t("subtitle2")}</p>
                    <a
                      className="block mt-1 text-lg leading-tight font-medium } hover:underline"
                      href={job.descripcion}
                    >
                      {t("link")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
  );
}

export default JobBoard;
