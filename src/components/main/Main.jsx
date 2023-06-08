import Alertas from "./section_alertas/Alertas"
import Chamada from "./section_chamada/Chamada"
import Depoimentos from "./section_depoimentos/Depoimentos"
import Especialidades from "./section_especialidades/Especialidades"
import Formulario from "./section_formulario/Formularios"
import Perguntas from "./section_peguntas/Perguntas"
import PossoAjudar from "./section_posso_ajudar/PossoAjudar"
import QuemSou from "./section_quem_sou/QuemSou"

export default function Main() {
    return ( 
        <main>
            <Chamada />
            <PossoAjudar />
            <Especialidades />
            <Alertas />
            <QuemSou />
            <Depoimentos />
            <Perguntas />
            <Formulario />
        </main>
    )
}