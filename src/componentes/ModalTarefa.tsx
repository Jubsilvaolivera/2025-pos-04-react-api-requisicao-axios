"use client";

import React, { useState } from "react";

interface ModalTarefaProps {
    fecharModal: () => void;
    adicionarTarefa: (titulo: string) => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ fecharModal, adicionarTarefa }) => {
    const [titulo, setTitulo] = useState("");

    const handleAdicionar = () => {
        if (titulo.trim()) {
            adicionarTarefa(titulo);
            setTitulo("");
            fecharModal();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Adicionar Nova Tarefa</h2>
                <input 
                    type="text" 
                    className="border p-2 w-full mb-4" 
                    placeholder="Digite o título da tarefa"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <div className="flex justify-between">
                    <button onClick={fecharModal} className="bg-red-500 text-white px-4 py-2 rounded">
                        Fechar
                    </button>
                    <button onClick={handleAdicionar} className="bg-green-500 text-white px-4 py-2 rounded">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalTarefa;
