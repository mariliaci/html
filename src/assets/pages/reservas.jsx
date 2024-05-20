import '../style/Reservas.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from './cadastros,'

const Reservas = () =>{
    return(
        <body>

        
        <h1>Vagas disponível</h1>
<section>
    <div class="divisao">
    <div class="blocos">
        <ul type="none">
            <li class="Livre" >101 - Livre</li>
            <li class="Ocupado">102 - Ocupado</li>
            <li class="Ocupado">103 - Ocupado</li>
            <li class="Ocupado">104 - Ocupado</li>
            <li class="Livre">105 - Livre</li>
            <li class="Ocupado">106 - Ocupado</li>
            <li class="Livre">107 - Livre</li>
            <li class="Ocupado">108 - Ocupado</li>
        </ul>
    </div>
    <div class="blocos">
        <ul  type="none">
            <li class="Ocupado">301 - Ocupado</li>
            <li class="Livre">302 - Livre</li>
            <li class="Ocupado">303 - Ocupado</li>
            <li class="Ocupado">304 - Ocupado</li>
            <li class="Livre">305 - Livre</li>
            <li class="Livre">306 - Livre</li>
            <li class="Ocupado">307 - Ocupado</li>
            <li class="Livre">308 - Livre</li>
        </ul>
    </div>
</div>

<div class="divisao">
        <div class="blocos">
            <ul  type="none">
                <li class="Livre">201 - Livre</li>
                <li class="Livre">202 - Livre</li>
                <li class="Ocupado">203 - Ocupado</li>
                <li class="Livre">204 - Livre</li>
                <li class="Livre">205 - Livre</li>
                <li class="Ocupado">206 - Ocupado</li>
                <li class="Livre">207 - Livre</li>
                <li class="Ocupado">208 - Ocupado</li>
            </ul>
        </div>
    <div class="blocos">
        <ul type="none">
            <li class="Livre">401 - Livre</li>
            <li class="Livre">402 - Livre</li>
            <li class="Livre">403 - Livre</li>
            <li class="Ocupado">404 - Ocupado</li>
            <li class="Livre">405 - Livre</li>
            <li class="Livre">406 - Livre</li>
            <li class="Ocupado">407 - Ocupado</li>
            <li class="Livre">408 - Livre</li>
        </ul>
    </div>
    </div>
    <BrowserRouter>
    <Routes>
        <Route path="/cadastro" element={Cadastro}/>
    </Routes>
</BrowserRouter>
</section>
</body>
    )
}

export default Reservas