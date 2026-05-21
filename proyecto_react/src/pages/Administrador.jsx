import { Link } from "react-router-dom";
import "../css/Administrador.css"

function Administrador() {
  return (
    <main className="admin-container">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/turnos">Turnos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <section className="admin-card">
        <h2>Panel Administrador</h2>

        <form className="form-admin">
          <h3>Iniciar Sesión</h3>

          <div className="form-group">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              name="usuario"
              placeholder="Ingrese su usuario"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button type="submit">Ingresar</button>
        </form>
      </section>
    </main>
  );
}

export default Administrador;