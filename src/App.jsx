import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Saludo from './components/Saludo';

const App = () => {
  const [msj, setMsj] = useState('');

  const handleClick = () => {
    setMsj('(from changed state)');
  };

  return (
    <div>
      <Saludo saludoNuevo={`Hello my friend ${msj}!`} />
      <button onClick={handleClick}>Click Aqui</button>
    </div>
  );
};

export default App;