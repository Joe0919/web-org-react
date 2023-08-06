import "./Form.css";
import CampoForm from "../CampoForm";
import Select from "../Select";
import Boton from "../Boton";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, registrarEquipo } = props;

  const Enviar = (evt) => {
    evt.preventDefault();
    let id = uuidv4();
    let data = {
      id,
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(data);
  };

  const enviarEquipo = (e) => {
    e.preventDefault();
    registrarEquipo({titulo, colorPrimario: color});
  };

  return (
    <>
      <section
        className={props.showForm ? "formulario mostrar" : "formulario ocultar"}
      >
        <form onSubmit={Enviar}>
          <legend>
            Rellene los campos obligatorios del formulario de inscripción
          </legend>
          <CampoForm
            titulo="Datos Completos"
            placeholder="Ingrese sus datos completos"
            required
            valor={nombre}
            actualizarValor={setNombre}
          />
          <CampoForm
            titulo="Puesto"
            placeholder="Ingrese el puesto"
            required
            valor={puesto}
            actualizarValor={setPuesto}
          />
          <CampoForm
            titulo="Foto"
            placeholder="Ingrese el enlace del nombre"
            required
            valor={foto}
            actualizarValor={setFoto}
          />
          <Select
            valor={equipo}
            actualizarValor={setEquipo}
            equipos={props.equipos}
          />
          <Boton texto="Crear" />
        </form>
        <form onSubmit={enviarEquipo}>
          <legend>Rellene los campos para crear un nuevo equipo</legend>
          <CampoForm
            titulo="Nombre del equipo"
            placeholder="Ingrese el nombre"
            required
            valor={titulo}
            actualizarValor={setTitulo}
          />
          <CampoForm
            titulo="Color del equipo en Hex"
            placeholder="Ingrese el color en hex"
            required
            valor={color}
            actualizarValor={setColor}
            type="color"
          />
          <Boton texto="Crear equipo" />
        </form>
      </section>
    </>
  );
};

export default Form;
