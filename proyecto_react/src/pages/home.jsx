
function Home() {
  return (
    <div>
    <h2 className="bienvenidos">Bienvenidos</h2>

    <form className="iniciarsesion">

      <h4>Iniciar Sesión</h4>

      <label for="">Usuario</label>
      <input id="usuario" className="text" type="text" name="usuario" />

      <label for="">Contraseña</label>
      <input id="contrasena" className="text" type="password" name="contrasena" />

      <button type="submit">Iniciar Sesión</button>


    </form>
</div>
  );
}
export default Home;
