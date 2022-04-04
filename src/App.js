import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App text-white">
      <CounterBox />
    </div>
  );
}

function CounterBox() {

  const [counter, setCounter] = useState(0);
  const [counterColor, setCounterColor] = useState('grey')

  function updateValue(value) {
    const newValue = counter + +value;
    setCounter(newValue);

    const newColor = newValue > 0 ? 'green' : ' red';
    setCounterColor(newColor);

  }

  // 1. Establecer estilo en línea del id="counter" con la variable de estado counterColor

  // 2. La lógica de cómo debo actualizar setCounterColor en función del valor de counter. Si counter > 0 .... si counter < 0..... setCounterColor('red') o setCounterColor('green')

  // TODO: Devuelveme el JSX esperado
  return (<div><h1 className="text-uppercase">counter</h1>
    <h1 id="counter" style={{ 'color': counterColor }}>{counter}</h1>
    <div className="col">
      <Button text="lower count" value="-1" updateValue={updateValue} />
      <Button text="add count" value="1" updateValue={updateValue} />
    </div></div>);
}

function Button(props) {

  // gestión del click que me acaban de hacer
  // Mi gestión del click consiste en invocar la función que me ha pasado mi padre diciéndole cuantas unidades debe sumar o restar (me estoy identificando para que sepa cual es el botón que han pulsado)

  // TODO: Devuelveme un botón configurado según los requisitos
  return (<button onClick={() => { props.updateValue(props.value); }} className="btn counterBtn prevBtn text-uppercase m-2">{props.text}</button>);

}

export default App;
