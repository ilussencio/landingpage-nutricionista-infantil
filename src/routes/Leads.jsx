import React from 'react';
import LeadsCSS from '../css/leads.module.css';
export default function Leads() {
    return (
        <div className={LeadsCSS.container}>
            <div className={LeadsCSS.header}>
                <span>Cadastro de funcionários</span>
                <button onClick="openModal()" id="new">Cadastrar</button>
            </div>

            <div className={LeadsCSS.divTable}>
                <table>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th className={LeadsCSS.acao}>Editar</th>
                        <th className={LeadsCSS.acao}>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div className={LeadsCSS.modal-container}>
                <div className="modal">
                    <form action="">
                        <label htmlFor="m-nome">Nome</label>
                        <input type="text" id="m-nome" required/>
                        <label htmlFor="m-funcao">Email</label>
                        <input type="text" id="m-email" required/>
                        <label htmlFor="m-salario">Telefone</label>
                        <input type="number" id="m-telefone" required/>
                        <button id="btnSalvar">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )

}