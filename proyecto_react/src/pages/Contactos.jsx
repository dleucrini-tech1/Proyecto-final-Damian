import { Link } from "react-router-dom";
import "../css/contactos.css"

function Contactos() {
  return (
    <main className="contactos-container">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/turnos">Turnos</Link>
        <Link to="/administracion">Administración</Link>
      </nav>

      <section className="contacto-card">
        <h2>Contactos</h2>

        <form className="formulario-contacto">
          <h3>Iniciar Sesión</h3>

          <div className="form-group">
            <label htmlFor="usuario">Nombre</label>
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingrese su email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escriba su mensaje"
            ></textarea>
          </div>

          <button type="submit">Guardar</button>
        </form>
      </section>
    </main>
  );
}

export default Contactos;