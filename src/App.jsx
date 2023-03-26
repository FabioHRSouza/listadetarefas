import { useReducer, useState } from 'react'
import './App.css'
import React from 'react'
import { ToDoProvider } from './context/ToDoProvider'
import { ToDoList } from './Components/ToDoList'

function App() {

  return (
    <ToDoProvider>
      <ToDoList />
    </ToDoProvider>
  )

}

export default App


/*if (acao.tipo === "atualizar data") {
  novoEstado = {
    ...estado,
    data_alteracao: new Date().toLocaleDateString("en-US"),
  };
}

import { useState } from "react";
import "./ListItem.css";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function ListItem({ tarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  function finalizarTarefa() {
    setFinalizado(true);
  }

  return (
    <div className="list-item">
      <p className={finalizado ? "finalizado sem-borda" : ""}>{tarefa.texto}</p>
      {finalizado ? (
        <MdThumbUp />
      ) : (
        <button className="button-reset" o

*/