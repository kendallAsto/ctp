import "./App.css";
import Nav from "./Components/Nav";
import IMG1 from "./Assets/IMGS/Carrousel/Afuera.webp";
import IMG2 from "./Assets/IMGS/Carrousel/Folklor.webp";
import IMG3 from "./Assets/IMGS/Carrousel/Perrito.webp";
import Informacion from "./Components/Informacion";
import { useTranslation } from "react-i18next";
import BTNS from "./Components/BTNS";
import Danger from "./Assets/IMGS/Danger.webp"

const Especialidades = [
  "Diseño publicitario",
  "Ejecutivo comercial y servicio al cliente",
  "Contabilidad y finanzas",
  "Desarrollo de aplicaciones móviles",
  "Dibujo y modelado de edificaciones",
  "Electrónica en telecomunicaciones",
  "Gestión de la producción",
  "Reparación de los vehículos livianos",
];

const listItems = Especialidades.map((Especialidad) => (
  <li className="text-2xl">{Especialidad}</li>
));

function App() {
  const { t, i18n } = useTranslation("information");

  return (
    <div className="App font-Lato">
      <section className="Container md:w-[70%] m-auto">
        <Nav />
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

        <Informacion title={t('Vision.title')} body={t("Vision.body")} />

        <div>
          <Informacion
            title={t('Mission.title')}
            body={t("Mission.body", {
              CTPName: "Colegio Tecnico Profesional de Santo Domingo",
            })}
            extra={<BTNS />}
          />
        </div>

        <Informacion
          title={t("History.title")}
          body={t("History.body-1", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          body2={t("History.body-2", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          body3={t("History.body-3", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
        />

        <Informacion
          title={t("EO.title")}
          body={t("EO.body", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          extra={
            <ul>
              {Especialidades.map((especialidad, index) => (
                <a href="">
                  <li
                    key={index}
                    className="text-2xl bg-Atlantis p-2 m-2 rounded text-white "
                  >
                    <span className="font-Poppins">{especialidad}</span>
                  </li>
                </a>
              ))}
            </ul>
          }
        />

        <Informacion
          title={t("PEYM.title")}
          body={t("PEYM.body-1", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          body2={t("PEYM.body-2", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
          body3={t("PEYM.body-3", {
            CTPName: "Colegio Tecnico Profesional de Santo Domingo",
          })}
        />

        <section>
          <h1 className="font-bold font-Poppins text-Atlantis md:text-4xl">{t('Contact.title')}</h1>
          <div>
            <form action="#" className="flex flex-col flex-wrap">
              <input type="text" placeholder={t('Contact.name')} className="p-2 bg-Blue-Dianne my-2 rounded-lg text-xl"/>
              <input type="text" placeholder={t('Contact.mail')} className="p-2 bg-Blue-Dianne my-2 rounded-lg text-xl"/>
              <textarea name="message" id="Message" placeholder={t('Contact.message')} className="p-2 bg-Blue-Dianne my-2 rounded-lg text-xl"></textarea>
            </form>
            <img src={Danger} alt="Foto del perro de la institucion" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
