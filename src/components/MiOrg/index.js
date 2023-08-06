import "./MiOrg.css";
const MiOrg = (props) => {
  return (
    <section className="section-miOrg">
        <h1>Mi Organización</h1>
        <img src="/img/add.png" alt="Imagen Mostrar Form"  onClick={props.changeMostrar}
        title="Ocultar/Mostrar Formulario"/>
    </section>
  );
};

export default MiOrg;