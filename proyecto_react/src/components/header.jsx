import imgenlogo from "../assets/LogodeaperturaDamian.png";
function Titulo() {

  return (
    <header>
      <img className="imagenlogoprincipal" src={imgenlogo} alt="" />
      <h1 className='titulo'> CLINICA DE OJOS DAMIAN</h1>
    </header>
  );
}

export default Titulo;

