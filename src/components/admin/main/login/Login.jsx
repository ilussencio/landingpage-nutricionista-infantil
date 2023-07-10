import { useEffect, useState } from "react";
import api from "../../../services/api.jsx";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function Login(){
        console.log(usuario);
        console.log(senha);
        var data = JSON.stringify({
            "operation": "create_authentication_tokens",
            "username": usuario,
            "password": senha
        });
        
        api.post("",data,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response.status)
            if(response.status === 200){
                localStorage.setItem('operation_token', response.data.operation_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                window.location.href ='/leads'
            }
            else
                toast.error('ERROR AO LOGAR', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
        }).catch((error) => {
            toast.error('ERROR AO LOGAR', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }); 
    }
    return (
        <div className="formulario-container">
            <ToastContainer />
            <div className="formulario">
                <div className="form-group">
                    <img src="sabrina_logo.png" width={150}/>
                </div>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" value={usuario} onChange={(e) => {setUsuario(e.target.value)}} placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label >Senha</label>
                    <input type="password" className="form-control" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder="Senha" />
                </div>
                <button className="btn btn-primary" onClick={() => {Login()}}>ENTRAR</button>
            </div>
        </div>
    )
}