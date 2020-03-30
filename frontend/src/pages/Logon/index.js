import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.png'
import fundoImg from '../../assets/fundo.png'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault(); //evitar carregamento da página

        try{
            const response = await api.post('sessions', {id});
            
            localStorage.setItem('restaurantId', id);
            localStorage.setItem('restaurantName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img className="logo" src={logoImg} alt="Restaurant"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                        <input
                         placeholder="Sua ID"
                         value={id}
                         onChange={e => setId(e.target.value)}
                         />
                        <button className="button" type="submit">Entrar</button>
                            <Link className="back-link" to="/register">
                                <FiLogIn size={16} color="#fff"/>
                                <span>Não tenho cadastro</span> 
                            </Link>
                </form>
            </section>

            <img className="fundo" src={fundoImg} alt="fundo"/>
        </div>
    );
}