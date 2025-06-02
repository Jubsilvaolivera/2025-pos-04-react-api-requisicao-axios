"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface TarefaInterface {
    id: number;
    todo: string;
    completed: boolean;
}

export default function TarefasPage() {
    const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/todos");
                setTarefas(response.data.todos);
            } catch (err) {
                setError("Erro ao buscar tarefas");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTarefas();
    }, []);

    if (loading) return <p>Carregando tarefas...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
            <ul>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id} className="p-2 border-b">
                        <input type="checkbox" checked={tarefa.completed} readOnly />
                        <span className={tarefa.completed ? "line-through" : ""}>{tarefa.todo}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
