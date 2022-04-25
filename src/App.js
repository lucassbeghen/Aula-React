import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BemVindo from './components/index.js'
import NavBar from './components/NavBar'

function App() {
  const caminhos = [
    {
      id: '1',
      caminho: '/',
      titulo: 'Página Inicial'
    },
    {
      id: '2',
      caminho: '/perfil',
      titulo: 'Perfil'
    },
    {
      id: '3',
      caminho: '/repositorios',
      titulo: 'Repositórios'
    },
    {
      id: '4',
      caminho: '/busca',
      titulo: 'Busca'
    }
  ]

  const [numero, setNumero] = useState(1)

  useEffect(()=>{
    alert('O numero foi alterado ! ')
  },[numero])

  useEffect(()=>{
    setNumero(numero + 1)
  },[])

  function aumentaNumero() {
    //numero[1](numero[0] + 1)
    setNumero(numero + 1)

    console.log(numero);
  }

  return (
    <div>
      <NavBar menu={caminhos} />
      <h1>{numero}</h1> <button onClick={aumentaNumero}>Clique Aqui</button>
      <BemVindo meuNome='Lucas' />
      <BemVindo meuNome = 'Léo' />
      {numero}
    </div>
  );
}

export default App;
