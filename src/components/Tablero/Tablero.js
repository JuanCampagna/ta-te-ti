import './tablero.css'
import Casilla from '../Casilla/Casilla'

const Tablero = () => {
  // let marcador = 'X'

  const marcar = () => {
    console.log('marco casilla')
  }

  return (
    <div className='tablero-tateti'>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
      <Casilla onClick={marcar}/>
    </div>
  )
}

export default Tablero
