import Animacao from "../../tools/Animacao";
export default function CardDepoimento({nome, depoimento, imagem, estrelas, id}) {
    return (
        <div className={"card-depoimento card-"+id}>
            <div className="card-depoimento-conteudo">
                <img className="card-depoimento-img" src={imagem} />
                <div className="card-depoimento-conteudo-nome">{nome}</div>
                <div className="card-depoimento-conteudo-texto">{depoimento}</div>
                <img className="card-depoimento-img-avaliacao" src={estrelas} />
            </div>

            
        </div>
    );
}    