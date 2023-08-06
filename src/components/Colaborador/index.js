import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { id, nombre, puesto, foto, equipo, fav } = props.datos;
  const { colorPrimario, eliminarColab, like } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColab(id)}
        title="Eliminar"
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? 
          <AiFillHeart color="red" onClick={() => like(id)} title="Quitar de Favoritos"/>
         : 
          <AiOutlineHeart onClick={() => like(id)} title="Agregar a favoritos"/>}
      </div>
    </div>
  );
};

export default Colaborador;
