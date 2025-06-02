import React, { useState } from "react";

interface TarefaProps {
    titulo: string;
    concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
    const [estaConcluido, setEstaConcluido] = useState(concluido);

    const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
        estaConcluido ? "bg-gray-800 hover:border-gray-800" : "bg-gray-400 hover:border-gray-400"
    }`;

    const escutarClique = () => {
        setEstaConcluido(!estaConcluido);
    };

    return (
        <div className={classe} onClick={escutarClique}>
            <h3 className="text-xl font-bold">{titulo}</h3>
            <p className="text-sm">{estaConcluido ? "Concluída" : "Pendente"}</p>
        </div>
    );
};

export default Tarefa;