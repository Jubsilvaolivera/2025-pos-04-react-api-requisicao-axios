export interface TarefaInterface {
    id: number;
    title: string;
    completed: boolean;
}

export const dados: TarefaInterface[] = [
    { id: 1, title: "delectus aut autem", completed: false },
    { id: 2, title: "quis ut nam facilis et officia qui", completed: true },
    { id: 3, title: "fugiat veniam minus", completed: false },
];