import './casilla.css'

const Casilla = () => {
  const marcador = () => {
    let marca = document.querySelector('.marca').innerHTML
    console.log(marca)
  }
  return (
    <div className="casilla" onClick={marcador}>
      <h1 className="marca">x</h1>
    </div>
  )
}

export default Casilla
