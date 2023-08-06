import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

export default function Equipo(props) {
  //Uso de Destructuración

  const { id, titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores, eliminarColab, actualizarColor, like } = props;

  const bgc = {
    backgroundColor: hexToRgba(colorPrimario, 0.2),
  };

  const border = {
    borderColor: colorPrimario,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={bgc}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={border}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColab={eliminarColab}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
