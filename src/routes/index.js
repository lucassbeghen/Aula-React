import {Routes, Route} from 'react-router-dom';

import Perfil from '../Pages/Perfil';

import PesquisaUriario from '../Pages/PesquisaUsuario'

import Error404 from '../Pages/Errors/Error404';

function Roteador () {
    return (
        <>
                <Routes>
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/perfil/:usuario' element={<Perfil />} />

                    <Route path='/busca' element={<PesquisaUriario />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>

        </>
    )
}

export default Roteador;