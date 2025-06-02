import React from "react";
import Tarefa from "@/componentes/Tarefa";
import { TarefaInterface } from "@/data/index";

interface TarefasProps {
    dados: TarefaInterface[];
}

const Tarefas: React.FC<TarefasProps> = ({ dados }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dados.map((tarefa) => (
                <Tarefa key={tarefa.id} titulo={tarefa.title} concluido={tarefa.completed} />
            ))}
        </div>
    );
};

export default Tarefas;