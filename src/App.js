import "./App.css";
import Header from "./components/header/header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Uso de Hooks (Estados)
  // useState
  // Sintaxis => const [nombreVariable, funcionActualizar] = useState(valorInicial);
  const [showForm, changeShowForm] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: "Joel Llallihuaman",
      puesto: "Programador de Interfaces de Usuario",
      foto: "https://github.com/Joe0919.png",
      equipo: "Front End",
      fav: true
    },
    {
      id: uuidv4(),
      nombre: "Genesys Carranza",
      puesto: "Programador de Interfaces de Usuario",
      foto: "https://github.com/Joe0919.png",
      equipo: "Front End",
      fav: false
    },
    {
      id: uuidv4(),
      nombre: "Harland Lohora",
      puesto: "Desarrollador de Software e instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Programación",
      fav: false
    },
    {
      id: uuidv4(),
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      equipo: "Innovación y Gestión",
      fav: false
    },
    {
      id: uuidv4(),
      nombre: "Cristian Velasco",
      puesto: "Head de Alura Latam",
      foto: "https://github.com/christianpva.png",
      equipo: "Data Science",
      fav: false
    },
    {
      id: uuidv4(),
      nombre: "Jose Gonsalez",
      puesto: "Dev. FullStack",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      equipo: "Devops",
      fav: false
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const changeMostrar = () => {
    changeShowForm(!showForm);
  };

  const registrarColaborador = (colaborador) => {
    // spread Operator
    setColaboradores([...colaboradores, colaborador]);
  };
  const registrarEquipo = (newEquipo) => {
    // spread Operator
    console.log(newEquipo)
    setEquipos([...equipos, {...newEquipo, id:uuidv4()}]);
  };

  const eliminarColab = (id) => {
    const newColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(newColaboradores);
  };
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {/* {showForm ? <Form showForm={showForm} /> : <></>} -> Forma condicional ternario*/}
      {showForm && (
        <Form
          showForm={showForm}
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          registrarEquipo={registrarEquipo}
        />
      )}
      {/* <Form showForm={showForm} /> */}

      <MiOrg changeMostrar={changeMostrar} showForm={showForm} />

      {equipos.map((equipo, index) => (
        <Equipo
          datos={equipo}
          key={index}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColab={eliminarColab}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
