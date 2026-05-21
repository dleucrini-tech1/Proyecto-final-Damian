import { Link } from "react-router-dom"
import "../css/Turnos.css"


function Seleccionarturnos() {
  return (
    <main className="turnos-container">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/administracion">Administración</Link>
      </nav>

      <section className="turnos-card">
        <h2>Selecciona tu Turno</h2>

        <form className="form-turnos">
          
          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input
              id="fecha"
              type="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Horario</label>
            <select id="hora">
              <option value="">Seleccione un horario</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="doctor">Doctor</label>
            <select id="doctor">
              <option value="">Seleccione un profesional</option>
              <option value="federico">Dr. Federico</option>
              <option value="carlos">Dr. Carlos</option>
              <option value="damian">Dr. Damián</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo de atención</label>
            <select id="tipo">
              <option value="">Seleccione una opción</option>
              <option value="consulta">Consulta</option>
              <option value="operacion">Operación</option>
              <option value="recetas">Recetas</option>
            </select>
          </div>

          <button type="submit">
            Guardar Turno
          </button>
        </form>
      </section>
    </main>
  );
}

export default Seleccionarturnos;