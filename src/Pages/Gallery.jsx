import React from "react";
import { Suspense } from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import fotoDanger1 from "../Assets/IMGS/Danger/Danger-1.webp";
import fotoDanger2 from "../Assets/IMGS/Danger/Danger-2.webp";
import fotoDanger3 from "../Assets/IMGS/Danger/Danger-3.webp";
import fotoDanger4 from "../Assets/IMGS/Danger/Danger-4.webp";
import fotoDanger5 from "../Assets/IMGS/Danger/Danger-5.webp";
import fotoDanger6 from "../Assets/IMGS/Danger/Danger-6.webp";
import fotoDanger7 from "../Assets/IMGS/Danger/Danger-7.webp";
import fotoDanger8 from "../Assets/IMGS/Danger/Danger-8.webp";
import fotoDanger9 from "../Assets/IMGS/Danger/Danger-9.webp";
import fotoDanger10 from "../Assets/IMGS/Danger/Danger-10.webp";
import foto1 from "../Assets/IMGS/Fotografia/Fotografia-1.webp";
import foto2 from "../Assets/IMGS/Fotografia/Fotografia-2.webp";
import foto3 from "../Assets/IMGS/Fotografia/Fotografia-3.webp";
import foto4 from "../Assets/IMGS/Fotografia/Fotografia-4.webp";
import foto5 from "../Assets/IMGS/Fotografia/Fotografia-5.webp";
import foto6 from "../Assets/IMGS/Fotografia/Fotografia-6.webp";
import foto7 from "../Assets/IMGS/Fotografia/Fotografia-7.webp";
import foto8 from "../Assets/IMGS/Fotografia/Fotografia-8.webp";
import arte1 from "../Assets/IMGS/Arte/Arte-1.webp";
import arte2 from "../Assets/IMGS/Arte/Arte-2.webp";
import arte3 from "../Assets/IMGS/Arte/Arte-3.webp";
import arte4 from "../Assets/IMGS/Arte/Arte-4.webp";
import arte5 from "../Assets/IMGS/Arte/Arte-5.webp";
import arte6 from "../Assets/IMGS/Arte/Arte-6.webp";
import arte7 from "../Assets/IMGS/Arte/Arte-7.webp";
import arte8 from "../Assets/IMGS/Arte/Arte-8.webp";
import arte9 from "../Assets/IMGS/Arte/Arte-9.webp";
import arte10 from "../Assets/IMGS/Arte/Arte-10.webp";
import arte11 from "../Assets/IMGS/Arte/Arte-11.webp";
import arte12 from "../Assets/IMGS/Arte/Arte-12.webp";
import arte13 from "../Assets/IMGS/Arte/Arte-13.webp";
import arte14 from "../Assets/IMGS/Arte/Arte-14.webp";
import arte15 from "../Assets/IMGS/Arte/Arte-15.webp";
import arte16 from "../Assets/IMGS/Arte/Arte-16.webp";
import escultura1 from "../Assets/IMGS/Esculturas/escultura-1.webp";
import escultura2 from "../Assets/IMGS/Esculturas/escultura-2.webp";
import escultura3 from "../Assets/IMGS/Esculturas/escultura-3.webp";
import escultura4 from "../Assets/IMGS/Esculturas/escultura-4.webp";
import escultura5 from "../Assets/IMGS/Esculturas/escultura-5.webp";
import escultura6 from "../Assets/IMGS/Esculturas/escultura-6.webp";
import escultura7 from "../Assets/IMGS/Esculturas/escultura-7.webp";
import escultura8 from "../Assets/IMGS/Esculturas/escultura-8.webp";
import escultura9 from "../Assets/IMGS/Esculturas/escultura-9.webp";
import escultura10 from "../Assets/IMGS/Esculturas/escultura-10.webp";
import escultura11 from "../Assets/IMGS/Esculturas/escultura-11.webp";
import extra1 from "../Assets/IMGS/Extras/Extra-1.webp";
import extra2 from "../Assets/IMGS/Extras/Extra-2.webp";
import extra3 from "../Assets/IMGS/Extras/Extra-3.webp";
import extra4 from "../Assets/IMGS/Extras/Extra-4.webp";
import extra5 from "../Assets/IMGS/Extras/Extra-5.webp";
import extra6 from "../Assets/IMGS/Extras/Extra-6.webp";
import extra7 from "../Assets/IMGS/Extras/Extra-7.webp";
import extra8 from "../Assets/IMGS/Extras/Extra-8.webp";
import extra9 from "../Assets/IMGS/Extras/Extra-9.webp";
import extra10 from "../Assets/IMGS/Extras/Extra-10.webp";
import extra11 from "../Assets/IMGS/Extras/Extra-11.webp";
import banda1 from "../Assets/IMGS/Banda/Banda-1.webp";
import banda2 from "../Assets/IMGS/Banda/Banda-2.webp";
import banda3 from "../Assets/IMGS/Banda/Banda-3.webp";
import banda4 from "../Assets/IMGS/Banda/Banda-4.webp";
import banda5 from "../Assets/IMGS/Banda/Banda-5.webp";
import banda6 from "../Assets/IMGS/Banda/Banda-6.webp";
import banda7 from "../Assets/IMGS/Banda/Banda-7.webp";
import banda8 from "../Assets/IMGS/Banda/Banda-8.webp";
import banda9 from "../Assets/IMGS/Banda/Banda-9.webp";
import banda10 from "../Assets/IMGS/Banda/Banda-10.webp";
import banda11 from "../Assets/IMGS/Banda/Banda-11.webp";
import banda12 from "../Assets/IMGS/Banda/Banda-12.webp";
import banda13 from "../Assets/IMGS/Banda/Banda-13.webp";
import banda14 from "../Assets/IMGS/Banda/Banda-14.webp";
import banda15 from "../Assets/IMGS/Banda/Banda-15.webp";
import banda16 from "../Assets/IMGS/Banda/Banda-16.webp";
import banda17 from "../Assets/IMGS/Banda/Banda-17.webp";
import banda18 from "../Assets/IMGS/Banda/Banda-18.webp";
import banda19 from "../Assets/IMGS/Banda/Banda-19.webp";
import banda20 from "../Assets/IMGS/Banda/Banda-20.webp";
import banda21 from "../Assets/IMGS/Banda/Banda-21.webp";


export default function Gallery() {
  const { t } = useTranslation("gallery");
  const slidesFotografia = [
    { url: foto1 },
    { url: foto2 },
    { url: foto3 },
    { url: foto4},
    { url: foto5 },
    { url: foto6 },
    { url: foto7 },
    { url: foto8 },
  ];

  const slidesArte = [
    { url: arte1 },
    { url: arte2 },
    { url: arte3 },
    { url: arte4 },
    { url: arte5 },
    { url: arte6 },
    { url: arte7 },
    { url: arte8 },
    { url: arte9 },
    { url: arte10 },
    { url: arte11 },
    { url: arte12 },
    { url: arte13 },
    { url: arte14 },
    { url: arte15 },
    { url: arte16 },
  ];

  const slidesEsculturas = [
    { url: escultura1 },
    { url: escultura2 },
    { url: escultura3 },
    { url: escultura4 },
    { url: escultura5 },
    { url: escultura6 },
    { url: escultura7 },
    { url: escultura8 },
    { url: escultura9 },
    { url: escultura10 },
    { url: escultura11},
  ];

  const slidesExtras = [
    { url: extra1 },
    { url: extra2 },
    { url: extra3 },
    { url: extra4 },
    { url: extra5 },
    { url: extra6 },
    { url: extra7 },
    { url: extra8 },
    { url: extra9 },
    { url: extra10 },
    { url: extra11 },
  ];
  const slidesBanda = [
    { url: banda1 },
    { url: banda2 },
    { url: banda3 },
    { url: banda4 },
    { url: banda5 },
    { url: banda6 },
    { url: banda7 },
    { url: banda8 },
    { url: banda9 },
    { url: banda10 },
    { url: banda11 },
    { url: banda12 },
    { url: banda13 },
    { url: banda14 },
    { url: banda15 },
    { url: banda16 },
    { url: banda17 },
    { url: banda18 },
    { url: banda19 },
    { url: banda20 },
    { url: banda21 },
  ];
  const slidesDanger = [
    { url:  fotoDanger1},
    { url:  fotoDanger2},
    { url:  fotoDanger3},
    { url:  fotoDanger4},
    { url:  fotoDanger5},
    { url:  fotoDanger6},
    { url:  fotoDanger7},
    { url:  fotoDanger8},
    { url:  fotoDanger9},
    { url:  fotoDanger10},

  ];

  const [currentIndexArte, setCurrentIndexArte] = useState(0);
  const [currentIndexFotografia, setCurrentIndexFotografia] = useState(0);
  const [currentIndexEsculturas, setCurrentIndexEsculturas] = useState(0);
  const [currentIndexExtras, setCurrentIndexExtras] = useState(0);
  const [currentIndexBanda, setCurrentIndexBanda] = useState(0);
  const [currentIndexDanger, setCurrentIndexDanger] = useState(0);

  //Manejo de botones de Arte

  const prevSlideArte = () => {
    const isFirstSlide = currentIndexArte === 0;
    const newIndex = isFirstSlide
      ? slidesArte.length - 1
      : currentIndexArte - 1;
    setCurrentIndexArte(newIndex);
  };
  const nextSlideArte = () => {
    const isLastSlide = currentIndexArte === slidesArte.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexArte + 1;
    setCurrentIndexArte(newIndex);
  };

  //Manejo de botones de Fotografias

  const prevSlideFotografia = () => {
    const isFirstSlide = currentIndexFotografia === 0;
    const newIndex = isFirstSlide
      ? slidesFotografia.length - 1
      : currentIndexFotografia - 1;
    setCurrentIndexFotografia(newIndex);
  };
  const nextSlideFotografia = () => {
    const isLastSlide = currentIndexFotografia === slidesFotografia.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexFotografia + 1;
    setCurrentIndexFotografia(newIndex);
  };

  //Manejo de botones de Esculturas

  const prevSlideEsculturas = () => {
    const isFirstSlide = currentIndexEsculturas === 0;
    const newIndex = isFirstSlide
      ? slidesEsculturas.length - 1
      : currentIndexEsculturas - 1;
    setCurrentIndexEsculturas(newIndex);
  };
  const nextSlideEsculturas = () => {
    const isLastSlide = currentIndexEsculturas === slidesEsculturas.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexEsculturas + 1;
    setCurrentIndexEsculturas(newIndex);
  };

  //Manejo de botones de Extras
  const prevSlideExtras = () => {
    const isFirstSlide = currentIndexExtras === 0;
    const newIndex = isFirstSlide
      ? slidesExtras.length - 1
      : currentIndexExtras - 1;
    setCurrentIndexExtras(newIndex);
  };
  const nextSlideExtras = () => {
    const isLastSlide = currentIndexExtras === slidesExtras.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexExtras + 1;
    setCurrentIndexExtras(newIndex);
  };

  
  //Manejo de botones de Banda

  const prevSlideBanda = () => {
    const isFirstSlide = currentIndexBanda === 0;
    const newIndex = isFirstSlide
      ? slidesBanda.length - 1
      : currentIndexBanda - 1;
    setCurrentIndexBanda(newIndex);
  };
  const nextSlideBanda = () => {
    const isLastSlide = currentIndexBanda === slidesBanda.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexBanda + 1;
    setCurrentIndexBanda(newIndex);
  };

  //Manejo de botones de Danger

  const prevSlideDanger = () => {
    const isFirstSlide = currentIndexDanger === 0;
    const newIndex = isFirstSlide
      ? slidesDanger.length - 1
      : currentIndexDanger - 1;
    setCurrentIndexDanger(newIndex);
  };
  const nextSlideDanger = () => {
    const isLastSlide = currentIndexDanger === slidesDanger.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexDanger + 1;
    setCurrentIndexDanger(newIndex);
  };
  return (
    <Suspense fallback="Cargando Galeria">
      <>
        <h1 className="mb-12 text-center text-3xl font-extrabold text-Atlantis lg:text-4xl dark:text-emerald-300">
          {t("title")}
        </h1>
        <section className="relative m-auto flex w-[90%] grid-cols-2 flex-col content-center items-center justify-center gap-8 md:grid">
          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("art")}
            </h1>
            <div
              style={{
                backgroundImage: `url(${slidesArte[currentIndexArte].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>

            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideArte} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideArte} size={30} />
            </div>
          </div>

          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("photography")}
            </h1>

            <div
              style={{
                backgroundImage: `url(${slidesFotografia[currentIndexFotografia].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>

            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideFotografia} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideFotografia} size={30} />
            </div>
          </div>

          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("sculptures")}
            </h1>

            <div
              style={{
                backgroundImage: `url(${slidesEsculturas[currentIndexEsculturas].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>
            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideEsculturas} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideEsculturas} size={30} />
            </div>
          </div>
          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("installations")}
            </h1>

            <div
              style={{
                backgroundImage: `url(${slidesExtras[currentIndexExtras].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>
            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideExtras} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideExtras} size={30} />
            </div>
          </div>


          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("band")}
            </h1>

            <div
              style={{
                backgroundImage: `url(${slidesBanda[currentIndexBanda].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>
            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideBanda} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideBanda} size={30} />
            </div>
          </div>

          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("danger")}
            </h1>
            <div
              style={{
                backgroundImage: `url(${slidesDanger[currentIndexDanger].url})`,
              }}
              className="aspect-square h-[400px] w-[90%] rounded-xl bg-cover bg-center duration-500 md:h-[90%] lg:w-[60%]"
            ></div>

            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideDanger} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideDanger} size={30} />
            </div>
          </div>

        </section>
      </>
    </Suspense>
  );
}
