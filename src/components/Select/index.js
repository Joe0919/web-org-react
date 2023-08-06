import "./Select.css";

const Select = (props) => {


  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }
  return (
    <div className="campo-form">
      <select className="equipo" value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccione una opcion...</option>
        { props.equipos.map( (equipo , index) => <option key={index}>{equipo}</option> ) }
      </select>
      <label htmlFor="foto">Equipo</label>
    </div>
  );
};

export default Select;
