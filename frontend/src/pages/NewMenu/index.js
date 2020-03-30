import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.png'

export default function NewMenu(){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();
    const history = useHistory();
    const restaurantId = localStorage.getItem('restaurantId');

   async function handleNewMenu(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('menus', data, {
                headers:{
                    Authorization: restaurantId,
                }
            });
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Restaurants"/>
                    <h1>Cadastrar novo lanche</h1>
                    <p>Descreva o lanche detalhadamente.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#ea2041"/>
                        <span>Voltar</span>
                    </Link>
                </section>
                <form onSubmit={handleNewMenu}>
                    <input 
                        placeholder="Nome do lanche"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}