"use client"


import React, { useState } from 'react'
import { login } from '../services/login'

const Login = () => {


    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleLogin = async(event: any) => {

        event.praventDefault();
        try {
            const response = await login(email, senha)
            console.log(response);

            if(!response){
                alert('Email ou senha invalidos!')
            }else{
                alert('Login efetuado com sucesso!')
            }
            
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            
        }
    }





    return (

        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Login