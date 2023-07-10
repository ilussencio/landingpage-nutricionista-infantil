import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './routes/Admin.jsx'
import Home from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Leads from './routes/Leads.jsx'
import Privacidade from "./routes/Privacidade.jsx";
import Termos from "./routes/Termos.jsx";

//Configurando router
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './css/styles.css'
import './css/formulario.css'
import './css/alertas.css'
import './css/depoimentos.css'
import './css/quemSou.css'
import './css/perguntas.css'
import './css/chamada.css'
import './css/header.css'
import './css/especialidades.css'
import './css/posso_ajudar.css'
import './css/footer.css'
import './css/personalizada.css'
import './css/instaFeed.css'
import './css/termos-privacidade.css'
import './css/cookieconsent.css'


const router  = createBrowserRouter([
    {path: "/", element: <App />},
    {errorElement: <ErrorPage />},
    {path: "admin", element: <Admin />},
    {path: "home", element: <Home />},
    {path: "leads", element: <Leads />},
    {path: "privacidade", element: <Privacidade />},
    {path: "termos", element: <Termos />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)