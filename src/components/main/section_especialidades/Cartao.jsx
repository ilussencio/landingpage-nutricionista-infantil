import { Popover } from 'react-tiny-popover';
import React, { useState } from 'react';

export default function Cartao({ titulo, descricao, imagem, id }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <div className={"cartao card-cartao-"+id}>
            <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']}
                content={<div className="cartao-popover">{descricao}</div>}
            >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <img className="cartao-imagem" src={imagem} alt={titulo} />
                    <h3>{titulo}</h3>
                </div>
            </Popover>
        </div>

    );
}