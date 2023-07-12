import { useState, useEffect, useRef } from 'react'
import Api from '../../../services/api.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import { ContentState, EditorState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import JoditEditor from "jodit-react";
import e from 'cors';

export default function Campanha() {
    const [campanhas, setCampanhas] = useState([])
    
    const [id, setId] = useState('')
    const [link, setLink] = useState('')
    const [titulo, setTitulo] = useState('')
    const [subtitulo, setSubtitulo] = useState('')
    
    const [texto, setTexto] = useState('')
    const [imagem, setImagem] = useState('')
    const [status, setStatus] = useState(0)
    const [editorState, setEditorState] = useState('');
    const editor = useRef(null);

    function selectCampanha(campanha) {
        setEditorState(campanha.texto)
        setId(campanha['#'])
        setLink(campanha.link)
        setTitulo(campanha.titulo)
        setSubtitulo(campanha.subtitulo)
        setTexto(campanha.texto)
        setImagem(campanha.img)
        setStatus(campanha.status)
    }

    useEffect(() => {
        getCampanhas()
    }, []);

    async function updateCampanha() {
    
        var data = JSON.stringify({
            "operation": "update",
            "schema": "leads",
            "table": "section",
            "records": [
                {
                    "#": id,
                    "link": link,
                    "status": status,
                    "img": imagem,
                    "subtitulo": subtitulo,
                    "titulo": titulo,
                    "texto": editorState
                }
            ]
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200){
                getCampanhas();
                toast.success('Campanha atualizada!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else
                toast.error('Campanha não encontrada!', {
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
                toast.error('Campanha não encontrada!', {
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
    async function cadastrarCampanha() {
        
        var data = JSON.stringify({
            "operation": "insert",
            "schema": "leads",
            "table": "section",
            "records": [
                {
                    "link": link,
                    "status": 0,
                    "img": imagem,
                    "subtitulo": subtitulo,
                    "titulo": titulo,
                    "texto": editorState
                }
            ]
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200){
                getCampanhas();
                toast.success('Campanha cadastrada!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else
                toast.error('Campanha não encontrada!', {
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
                toast.error('Campanha não encontrada!', {
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
    async function getCampanhas() {

        var data = JSON.stringify({
            "operation": "sql",
            "sql": `SELECT * FROM leads.section ORDER BY __createdtime__ DESC`
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            
            if (response.status === 200)
                setCampanhas(response.data)
            else
                toast.error('Campanhas não encontrada!', {
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
                toast.error('Campanhas não encontrada!', {
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
    async function ativarCampanha(campanha) {
        console.log("ID", campanha['#'])
        setCampanhas(campanhas.map((cap) => {
            if(cap['#'] == campanha['#'])
                cap.status = 1;
            else
                cap.status = 0;
            return cap;
        }));
       

        var data = JSON.stringify({
            "operation": "update",
            "schema": "leads",
            "table": "section",
            "records": campanhas
        });

        await Api.post("", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('operation_token')
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200){
                getCampanhas();
                toast.success('Campanha ativa com sucesso', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else
                toast.error('Erro ao ativar campanha', {
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
                toast.error('Erro ao ativar campanha', {
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

    async function exluirCampanha() {

        var data = JSON.stringify({
            "operation": "delete",
            "table": "section",
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
                getCampanhas();
                toast.success('Excluido com sucesso', {
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
                toast.error('Error ao excluir campanha!', {
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
                toast.error('Error ao excluir campanha!', {
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

                <div className="row">
                    <div className="col-sm-12"><h1>CAMPANHAS</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#largeModal">NOVA CAMPANHA</button>
                    </div>
                </div>

                {/* INSERIR MODAL */}
                <div className="modal fade" id="largeModal" tabIndex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">NOVA CAMPANHA</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input type="text" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} className="form-control" placeholder="Titulo" />
                                    </div>

                                    <div className="form-group">
                                        <label>Subtitulo</label>
                                        <input type="text" value={subtitulo} onChange={(e) => { setSubtitulo(e.target.value) }} className="form-control" placeholder="Subtitulo" />
                                    </div>

                                    <div className="form-group">
                                        <label>Link para redirecionamento</label>
                                        <input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} className="form-control" placeholder="Link para redirecionamento" />
                                    </div>

                                    <div className="form-group">
                                        <label>Link para imagem</label>
                                        <input type="text" value={imagem} onChange={(e) => { setImagem(e.target.value) }} className="form-control" placeholder="Link para imagem" />
                                    </div>

                                    <div className="form-group">
                                        <label>Apresentação</label>

                                        <JoditEditor
                                            ref={editor}
                                            value={editorState}
                                            onBlur={newContent => setEditorState(newContent)}
                                        />
                                    </div>
                                    

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {cadastrarCampanha()}}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INSERIR EDITAR */}
                <div className="modal fade" id="editarModal" tabIndex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">EDITAR CAMPANHA</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input type="text" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} className="form-control" placeholder="Titulo" />
                                    </div>

                                    <div className="form-group">
                                        <label>Subtitulo</label>
                                        <input type="text" value={subtitulo} onChange={(e) => { setSubtitulo(e.target.value) }} className="form-control" placeholder="Subtitulo" />
                                    </div>

                                    <div className="form-group">
                                        <label>Link para redirecionamento</label>
                                        <input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} className="form-control" placeholder="Link para redirecionamento" />
                                    </div>

                                    <div className="form-group">
                                        <label>Link para imagem</label>
                                        <input type="text" value={imagem} onChange={(e) => { setImagem(e.target.value) }} className="form-control" placeholder="Link para imagem" />
                                    </div>

                                    <div className="form-group">
                                        <label>Apresentação</label>
                                        
                                        <JoditEditor
                                            ref={editor}
                                            value={editorState}
                                            onBlur={newContent => setEditorState(newContent)}
                                        />
                                    </div>
                                    

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {updateCampanha()}}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* EXCLUIR MODAL */}
                <div className="modal fade" id="smallModal" tabIndex="-1" role="dialog" aria-labelledby="smallModal" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">EXCLUIR CAMPANHA</h4>
                            </div>
                            <div className="modal-body">
                                <p>Deseja excluir o campanha abaixo?</p>
                                <p><b>Titulo:</b> {titulo}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => { exluirCampanha() }}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Status</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campanhas.map((campanha, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{campanha.titulo}</td>
                                        <td>{campanha.status?"Ativo":""}</td>
                                        <td>
                                            <button style={{marginRight: "10px"}} className="btn btn-warning" onClick={() => {
                                                ativarCampanha(campanha); }
                                            }>Ativar</button>
                                            <button style={{marginRight: "10px"}} className="btn btn-primary" data-toggle="modal" data-target="#editarModal" onClick={() => { selectCampanha(campanha) }}>Editar</button>
                                            <button className="btn btn-danger" data-toggle="modal" data-target="#smallModal" onClick={() => { selectCampanha(campanha) }}>Excluir</button>
                                            
                                        </td>
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