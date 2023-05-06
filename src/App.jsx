import React from 'react';
import './App.css';
import ListaTareas from './components/lista/lista';

function App() {
  const tareasEnLocalStorage = [];

  for (let i = localStorage.length - 1; i >= 0; i--) {
      let clave = localStorage.key(i);
      let valor = JSON.parse(localStorage.getItem(clave));
      tareasEnLocalStorage.push(valor);
  };
  return (
    <div className="App">
      <div className='lista__container'>
        <h1 className='lista__title'>Mis Tareas</h1>
        <ListaTareas inStorage={tareasEnLocalStorage}/>
      </div>
    </div>
  );
}

export default App;
