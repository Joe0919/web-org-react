import "./CampoForm.css";

const CampoForm = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo-form campo-${type}`}>
      <input
        className="nombre"
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
      <label htmlFor="nombre">{props.titulo}</label>
    </div>
  );
};

export default CampoForm;
