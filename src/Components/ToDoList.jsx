import React from "react";
import { ToDoContext } from "../context/context";
import { useContext } from "react";

export const ToDoList = () => {
    const { listaDeTarefas , adicionarTarefa, concluirTarefa } = useContext(ToDoContext);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const tarefa = {
            id: new Date().getTime(),
            texto: event.target.tarefa.value,
        };

        adicionarTarefa(tarefa);
        event.target.tarefa.value = "";
    };

    const handleConcluir = (id) => {
        
        concluirTarefa(id);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" name="tarefa" placeholder="Descreva a Tarefa" />
                <button type="submit">Adicionar Tarefa</button>
            </form>
            <ul>
                {listaDeTarefas.map((tarefa) => (
                    <li key={tarefa.id}>
                        {tarefa.texto}
                        <button onClick={() => handleConcluir(tarefa.id)}>Concluir</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

   
  