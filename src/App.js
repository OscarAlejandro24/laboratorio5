import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  //1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables

    let temperatureInitialColor = 'cold'
    let temperatureInitialValue = '10'
    
    let[temperatureColor, setColor] = useState(temperatureInitialColor)
    let[temperatureValue, setTemperatureValue] = useState(parseInt(temperatureInitialValue))

  /*
    2) Agregar las funciones para manejar los eventos de Click a los botones para que 
        cuando se presionen se incremente o decremente el valor de la temperatura. 

    3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
      De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

    Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
    De igual manera al llegar los valores a 0 no se podrá decrementas más.
  */

  function increase(){
    if(temperatureValue === 30){
      return
    }
    else if(temperatureValue >= 19){
      setColor(temperatureColor = 'hot')
    }
    setTemperatureValue(temperatureValue+1)
    console.log(temperatureValue)
  }

  function decrease(){
    if(temperatureValue === 0){
      return
    }
    else if(temperatureValue <= 20){
      setColor(temperatureColor = 'cold')
    }
    setTemperatureValue(temperatureValue-1)
    console.log(temperatureValue)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;