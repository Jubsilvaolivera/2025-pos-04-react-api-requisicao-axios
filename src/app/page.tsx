"use client";

import React, { useState } from "react";
import Cabecalho from "@/componentes/Cabecalho";
import ModalTarefa from "@/componentes/ModalTarefa";
import { TarefaInterface, dados } from "@/data/index";
import Tarefas from "@/componentes/Tarefas";

interface TarefaProps {
	titulo: string;
	concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
	const [estaConcluido, setEstaConcluido] = useState(concluido);

	const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		estaConcluido
			? "bg-gray-800 hover:border-gray-800"
			: "bg-gray-400 hover:border-gray-400"
	}`;

	const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

	const escutarClique = () => {
		console.log(`A tarefa '${titulo}' foi clicada!`);
		setEstaConcluido(!estaConcluido);
	};

	return (
		<div className={classeCard} onClick={() => escutarClique()}>
			<h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
			<p className={`text-sm ${classeCorDoTexto}`}>
				{estaConcluido ? "Concluída" : "Pendente"}
			</p>
		</div>
	);
};

interface TarefasProps {
	dados: TarefaInterface[];
}



const Home = () => {
    const [tarefas, setTarefas] = useState<TarefaInterface[]>(dados);
    const [modalAberto, setModalAberto] = useState(false);

    const adicionarTarefa = (titulo: string) => {
        const novaTarefa = { id: tarefas.length + 1, titulo, concluido: false };
        setTarefas([...tarefas, novaTarefa]);
    };

    return (
        <div className="container mx-auto p-4">
            <Cabecalho />
            <button onClick={() => setModalAberto(true)} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Nova Tarefa
            </button>
            {modalAberto && <ModalTarefa fecharModal={() => setModalAberto(false)} adicionarTarefa={adicionarTarefa} />}
            <Tarefas dados={tarefas} />
			<a href="/tarefas" className="text-blue-500 underline">Ver lista de tarefas</a>
        </div>
    );
};

export default Home;
