import React from 'react';
import '../css/tablero.css' 

function Tablero() {
  return(
    // <table className='tablero-tateti'>
    //   <tr>
    //     <td>1</td>
    //     <td>2</td>
    //     <td>3</td>
    //   </tr>
    //   <tr>
    //     <td>4</td>
    //     <td>5</td>
    //     <td>6</td>
    //   </tr>
    //   <tr>
    //     <td>7</td>
    //     <td>8</td>
    //     <td>9</td>
    //   </tr>
    // </table>

    <div className='tablero-tateti'>
      <div className='item'>1</div>
      <div className='item'>2</div>
      <div className='item'>3</div>
      <div className='item'>4</div>
      <div className='item'>5</div>
      <div className='item'>6</div>
      <div className='item'>7</div>
      <div className='item'>8</div>
      <div className='item'>9</div>
    </div>
  )
}

export default Tablero
