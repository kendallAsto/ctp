import React from "react";
import { Suspense } from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const {t} = useTranslation('gallery')
  const slidesFotografia = [
    { url: "https://i.ibb.co/zSLF0dj/Fotografia-1.webp" },
    { url: "https://i.ibb.co/ykBYNvv/Fotografia-2.webp" },
    { url: "https://i.ibb.co/Db3g7rT/Fotografia-3.webp" },
    { url: "https://i.ibb.co/3yF9xy1/Fotografia-4.webp" },
    { url: "https://i.ibb.co/sF7Nmv8/Fotografia-5.webp" },
    { url: "https://i.ibb.co/jJDzYdk/Fotografia-6.webp" },
    { url: "https://i.ibb.co/R0qwhQ5/Fotografia-7.webp" },
    { url: "https://i.ibb.co/PTNh7T0/Fotografia-8.webp" },
  ];

  const slidesArte = [
    { url: "https://i.ibb.co/7VkqcKB/Arte-1.webp" },
    { url: "https://i.ibb.co/X4wSkpM/Arte-2.webp" },
    { url: "https://i.ibb.co/qDmQ46D/Arte-3.webp" },
    { url: "https://i.ibb.co/z2CrhXw/Arte-4.webp" },
    { url: "https://i.ibb.co/9rzkmP2/Arte-5.webp" },
    { url: "https://i.ibb.co/02Dm3tr/Arte-6.webp" },
    { url: "https://i.ibb.co/qksmGPH/Arte-7.webp" },
    { url: "https://i.ibb.co/Wn0mrGn/Arte-8.webp" },
    { url: "https://i.ibb.co/qmyDBbV/Arte-9.webp" },
    { url: "https://i.ibb.co/TkjWbnm/Arte-10.webp" },
    { url: "https://i.ibb.co/85H5rsK/Arte-11.webp" },
    { url: "https://i.ibb.co/hf7g9cq/Arte-12.webp" },
    { url: "https://i.ibb.co/TLCS4ZL/Arte-13.webp" },
    { url: "https://i.ibb.co/RvBjx0d/Arte-14.webp" },
    { url: "https://i.ibb.co/yQgWwC2/Arte-15.webp" },
    { url: "https://i.ibb.co/NFg5ccc/Arte-16.webp" },
  ];

  const slidesEsculturas = [
    { url: "https://i.ibb.co/PCMgGQy/escultura-2.webp" },
    { url: "https://i.ibb.co/jkB5H7R/escultura-1.webp" },
    { url: "https://i.ibb.co/PDTXBdq/escultura-3.webp" },
    { url: "https://i.ibb.co/BsxP47k/escultura-4.webp" },
    { url: "https://i.ibb.co/drqcxsm/escultura-6.webp" },
    { url: "https://i.ibb.co/Z88Ftmv/escultura-5.webp" },
    { url: "https://i.ibb.co/rwLnmq1/escultura-7.webp" },
    { url: "https://i.ibb.co/CWbJXGz/escultura-8.webp" },
    { url: "https://i.ibb.co/1qZ1sXk/escultura-10.webp" },
    { url: "https://i.ibb.co/C555jgg/escultura-9.webp" },
    { url: "https://i.ibb.co/sPzDL3M/escultura-11.webp" },
  ];

  const slidesExtras = [
    { url: "https://i.ibb.co/Q69Xncw/Automotriz.webp" },
    { url: "https://i.ibb.co/GRrqrqM/Gimnasio.webp" },
    { url: "https://i.ibb.co/pbg3yHG/Gym-inside.webp" },
    { url: "https://i.ibb.co/Pm5D02w/outside.webp" },
    { url: "https://i.ibb.co/6ZPQNQG/Pasillo.webp" },
    { url: "https://i.ibb.co/6X7wfSW/Aula.webp " },
    { url: "https://i.ibb.co/pQf26ng/Automotriz-inside-v2.webp " },
    { url: "https://i.ibb.co/LvYVCt5/Automotriz-inside.webp" },
    { url: "https://i.ibb.co/gwpRW5N/Explanada.webp " },
    { url: "https://i.ibb.co/pLJRMKd/Pasillo-2.webp " },
    { url: "https://i.ibb.co/zJXqTsM/soda.webp " },
  ];
  const [currentIndexArte, setCurrentIndexArte] = useState(0);
  const [currentIndexFotografia, setCurrentIndexFotografia] = useState(0);
  const [currentIndexEsculturas, setCurrentIndexEsculturas] = useState(0);
  const [currentIndexExtras, setCurrentIndexExtras] = useState(0);

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
  return (
    <Suspense fallback="Cargando Galeria">
      <>
      <h1 className="text-Sycamore font-bold text-center text-3xl mb-12">{t("title")}</h1>
        <section className="relative m-auto flex w-[90%] grid-cols-2 flex-col content-center items-center justify-center gap-8 md:grid">
          <div className="group relative flex flex-col items-center justify-center gap-8">
            <h1 className="text-pretty text-center text-2xl font-bold text-Atlantis lg:text-3xl">
              {t("art")}
            </h1>
            <div
              style={{
                backgroundImage: `url(${slidesArte[currentIndexArte].url})`,
              }}
              className="aspect-square h-[400px] rounded-xl bg-cover bg-center duration-500 md:h-[90%] w-[90%] lg:w-[60%]"
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
              className="aspect-square h-[400px] rounded-xl bg-cover bg-center duration-500 md:h-[90%] w-[90%] lg:w-[60%]"
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
              className="aspect-square h-[400px] rounded-xl bg-cover bg-center duration-500 md:h-[90%] w-[90%] lg:w-[60%]"
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
              className="aspect-square h-[400px] rounded-xl bg-cover bg-center duration-500 md:h-[90%] w-[90%] lg:w-[60%]"
            ></div>
            <div className="absolute left-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:left-8 lg:left-48 lg:hidden">
              <BsChevronCompactLeft onClick={prevSlideExtras} size={30} />
            </div>

            <div className="absolute right-4 top-[50%] -translate-x-0 -translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-White group-hover:block md:right-8 lg:right-48 lg:hidden">
              <BsChevronCompactRight onClick={nextSlideExtras} size={30} />
            </div>
          </div>
        </section>
      </>
    </Suspense>
  );
}
