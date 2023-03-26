import React, {useState} from "react";
import { ToDoContext } from "./context";

export const ToDoProvider = ({ children }) => {
    const [listaDeTarefas, setListaDeTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {
        setListaDeTarefas([...listaDeTarefas, tarefa]);
    };

    const concluirTarefa = (id) => {
        setListaDeTarefas(tarefa.filter((tarefa) => tarefa.id !== id));
    };

    const removerTarefa = (id) => {
        setListaDeTarefas(listaDeTarefas.filter((tarefa) => tarefa.id !== id));
      };
    
    return (
        <ToDoContext.Provider value={{ listaDeTarefas, adicionarTarefa, concluirTarefa, removerTarefa }}>
        {children}
        </ToDoContext.Provider>
    );
    }