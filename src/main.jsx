import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './routes/LoginRoute.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Leads from './routes/LeadsRoute.jsx'
import Campanha from './routes/CampanhaRoute.jsx'

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
import './css/admin.css'


const router  = createBrowserRouter([
    {path: "/", element: <App />},
    {errorElement: <ErrorPage />},
    {path: "login", element: <Login />},
    {path: "leads", element: <Leads />},
    {path: "campanha", element: <Campanha />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)