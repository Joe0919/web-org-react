import "./Boton.css";

const Boton = (props) => {
  return (
    <div className="campo-form">
      <button type="submit" className="boton">{props.texto}</button>
    </div>
  );
};

export default Boton;
