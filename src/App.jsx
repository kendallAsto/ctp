import "./App.css";
import Nav from "./Components/Nav";
import IMG1 from "./Assets/IMGS/Carrousel/Afuera.webp";
import IMG2 from "./Assets/IMGS/Carrousel/Folklor.webp";
import IMG3 from "./Assets/IMGS/Carrousel/Perrito.webp";
import Informacion from "./Components/Informacion";
import { useTranslation } from "react-i18next";
import BTNS from "./Components/BTNS";
import Danger from "./Assets/IMGS/Danger.webp";
import Contact from "./Components/contact"
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Video from "./Assets/Videos/videoCTP.mp4"

function App() {
  const { t, i18n } = useTranslation("information");

  return (
    <div className="App font-Lato">
        <Nav />
      <video src={Video} id="video" autoplay muted controls></video>
      <section className="Container md:w-[70%] m-auto">
        <section className="flex m-auto gap-3 rounded-xl overflow-hidden mb-14">
          <img src={IMG1} alt="Imagen por fuera del CTP" className="w-1/3" />
          <img
            src={IMG3}
            alt="Imagen evento dia de las mascotas"
            className="w-1/3"
          />
          <img
            src={IMG2}
            alt="Imagen del grupo Folclorico 2024"
            className="w-1/3"
          />
        </section>

        <Informacion title={t("Vision.title")} body={t("Vision.body")} />

        <Informacion
          title={t("Mission.title")}
          body={t("Mission.body", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
        />

        <Informacion
          title={t("Valores.title")}
          extra={
            <section>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Honesty")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Respect")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Commitment")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Responsabity")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Trust")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.Solidarity")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.FACT")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.TW")}
                </p>
                <p className="text-2xl bg-Atlantis p-2 my-2 text-White rounded-lg text-center">
                  {t("Valores.listValores.DAE")}
                </p>
              </div>
            </section>
          }
        />

        <Informacion
          title={t("History.title")}
          body={t("History.body-1")}
          body2={t("History.body-2")}
          body3={t("History.body-3", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          extra={
            <div className="my-8">
              <BTNS />
            </div>
          }
        />

        <Informacion
          title={t("EO.title")}
          body={t("EO.body", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          extra={
            <div>
              <div className="grid grid-cols-2 gap-4">
                <section id="Especialidades-Diurno">
                  <div className="flex justify-center">
                    <h2 className="text-2xl bg-Fuscous text-White p-2 lg:w-1/3 rounded-full text-center cursor-pointer transition-colors duration-200 hover:bg-Blue-Dianne">
                      {t("EO.timeDiurno")}
                    </h2>
                  </div>
                  <ul>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.DP")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.ECYSA")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.CyF")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.DDAM")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.DyMDE")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.EET")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.GDLP")}
                    </p>
                    <p className="bg-Atlantis p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Blue-Dianne transition-colors duration-200 rounded-lg">
                      {t("EO.specialities.RDLVL")}
                    </p>
                  </ul>
                </section>

                <section className="Especialidades-Nocturno">
                  <div className="flex justify-center">
                    <h2 className="text-2xl bg-Fuscous text-White p-2 lg:w-1/3 rounded-full text-center cursor-pointer transition-colors duration-200 hover:bg-Blue-Dianne">
                      {t("EO.timeNocturna")}
                    </h2>
                  </div>
                  <ul>
                    <p className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg">
                      {t("EO.specialities-2.ECYSA")}
                    </p>
                    <p className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg">
                      {t("EO.specialities-2.CySDRySO")}
                    </p>
                    <p className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg">
                      {t("EO.specialities-2.Contabilidad")}
                    </p>
                    <p className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg">
                      {t("EO.specialities-2.ADLOA")}
                    </p>
                    <p className="bg-Blue-Dianne p-2 my-2 text-2xl text-White cursor-pointer hover:bg-Atlantis transition-colors duration-200 rounded-lg">
                      {t("EO.specialities-2.RDLVL")}
                    </p>
                  </ul>
                </section>
              </div>
            </div>
          }
        />

        <section className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="font-bold font-Poppins text-Atlantis md:text-4xl mb-8">
              {t("Contact.title")}
            </h1>
              <form action="#" className="flex flex-col flex-wrap gap-4">
                <input
                  type="text"
                  placeholder={t("Contact.name")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl"
                />
                <input
                  type="text"
                  placeholder={t("Contact.mail")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl"
                />
                <textarea
                  name="message"
                  id="Message"
                  placeholder={t("Contact.message")}
                  className="p-3 bg-Blue-Dianne my-2 rounded-lg text-white text-xl h-[250px]"
                ></textarea>
                <div className="flex  justify-center items-center gap-3 bg-Atlantis text-White p-2 w-1/3 text-xl rounded-xl">
                  <i class="fa-solid fa-paper-plane text-White"></i>
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>

            <img
              src={Danger}
              alt="Foto del perro de la institucion"
              className="w-[70%] m-auto rounded-xl"
            />
        </section>

        <section className="flex flex-col gap-4 my-24">
          <Contact clase='fa-solid fa-phone text-3xl' body='(+506) 2244-3190'/>
          <Contact clase='fa-solid fa-envelope text-3xl' body='ctp.santodomingo@mep.go.cr'/>
          <Contact clase='fa-solid fa-map text-3xl' body='300 metros Oeste y 25 metros Sur de la Iglesia Católica de Santa Rosa de Santo Domingo, Heredia , Santo Domingo, Costa Rica'/>
        </section>
      </section>
      <section>
          <Map/>
        </section>

        <section className="md:w-[90%] m-auto mt-12">
          <Footer/>
        </section>
    </div>
  );
}

export default App;
