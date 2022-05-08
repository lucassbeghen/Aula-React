import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from './components/NavBar'
import Roteador from './routes';


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

  return (
    <div>
        <BrowserRouter>
          <NavBar menu={caminhos} />
          <Roteador />
        </BrowserRouter>
    </div>
  );
}

export default App;
