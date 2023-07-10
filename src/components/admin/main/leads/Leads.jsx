import { useState, useEffect } from 'react'
import Api from '../../../services/api.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from 'moment';

export default function Leads() {
    const [leads, setLeads] = useState([])
    const [dataInicio, setDataInicio] = useState(Moment("2023-07-01").format('YYYY-MM-DD'))
    const [dataFinal, setDataFinal] = useState(Moment().format('YYYY-MM-DD'))
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function selectLead(lead) {
        setId(lead['#'])
        setNome(lead.nome)
        setEmail(lead.email)
        setTelefone(lead.telefone)
    }

    useEffect(() => {
        getLeads()
    }, []);

    async function getLeads() {

        var data = JSON.stringify({
            "operation": "sql",
            "sql": `SELECT * FROM leads.lead WHERE data BETWEEN '${Moment(dataInicio).format('YYYY-MM-DD')}' AND '${Moment(dataFinal).format('YYYY-MM-DD')}' order by data desc`
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200)
                setLeads(response.data)
            else
                toast.error('Erro ao buscar leads', {
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
            if (error.response.status === 401)
                window.location.href = '/login'
            else if (error.response.status === 403)
                window.location.href = '/login'
            else
                toast.error('Erro ao buscar leads', {
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

    async function excluirLead() {
        console.log(id)
        var data = JSON.stringify({
            "operation": "delete",
            "table": "lead",
            "schema": "leads",
            "hash_values": [
                id
            ]
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                getLeads();
                toast.success('Deletado com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else
                toast.error('Erro ao buscar leads', {
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
            if (error.response.status === 401)
                window.location.href = '/login'
            else if (error.response.status === 403)
                window.location.href = '/login'
            else
                toast.error('Erro ao buscar leads', {
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
        <section className='admin-leads'>
            <div className='container'>
                <ToastContainer />
                <h1>LEADS</h1>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Data Inicio</label>
                            <input type="date" value={dataInicio} min="2023-07-01" className="form-control" onChange={(e) => { setDataInicio(e.target.value); setDataFinal(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>Data Fim</label>
                            <input type="date" value={dataFinal} min={dataInicio} className="form-control" placeholder="data" onChange={(e) => { setDataFinal(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label>&nbsp;</label>
                            <button type="submit" className="btn btn-primary form-control" onClick={getLeads}>Buscar</button>
                        </div>
                    </div>
                </div>

                {/* EXCLUIR MODAL */}
                <div className="modal fade" id="smallModal" tabIndex="-1" role="dialog" aria-labelledby="smallModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">EXCLUIR LEAD</h4>
                            </div>
                            <div className="modal-body">
                                <p>Deseja excluir o lead abaixo?</p>
                                <p><b>Nome:</b> {nome}</p>
                                <p><b>Telefone:</b> {telefone}</p>
                                <p><b>Email:</b> {email}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => { excluirLead() }}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="cold">Data</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length === 0 ?
                            <tr>
                                <th scope="row" colSpan={6} style={{textAlign: "center"}}>{"Não há registros para o período selecionado!"}</th>
                            </tr>

                            : leads.map((lead, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{lead.nome}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.telefone}</td>
                                        <td>{Moment(lead.data).format("DD/MM/YYYY")}</td>
                                        <td><button className="btn btn-danger" data-toggle="modal" data-target="#smallModal" onClick={() => { selectLead(lead) }}>Excluir</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </section>
    )
}