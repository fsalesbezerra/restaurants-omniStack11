import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './style.css'

import logoImg from '../../assets/logo.png'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [address, setAddress] = useState('');
   


    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault(); //não carregar a pagina com o form
        const data = {
            name,
            email,
            whatsapp,
            address
        };

        try{
            const response = await api.post('restaurants', data);

        alert(`seu id de acesso: ${response.data.id}`);
        history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente ')
        }

    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Restaurants"/>
                    <p>Faça seu cadastro e publique seu cardápio.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#ea2041"/>
                        <span>Voltar</span>
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome do Restaurante"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Endereço"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}