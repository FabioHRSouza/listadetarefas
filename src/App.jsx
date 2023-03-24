import { useReducer, useState } from 'react'
import './App.css'

function App() {

const [textoTarefa, setTextoTarefa] = useState("")

const [listaDeTarefas, dispatchListaDeTarefas] = useReducer(reducerTarefas, [])

function reducerTarefas (state, action) {

  switch (action.type) {
      case "ADICIONAR":
        let novaTarefa = {
          id: state.length + 1,
          texto: textoTarefa,
          finalizado: false,
        }
        setTextoTarefa("")
        return [...state, novaTarefa]
        
      case "CONCLUIR":
        break;
  }
}

return (
  <div>
    <div>
    <input  
    placeholder="Texto da Tarefa" 
    type="text"
    value={textoTarefa} 
    onChange={(evento) => setTextoTarefa(evento.target.value)} 
    /> 
    <button onClick={() => dispatchListaDeTarefas({ type: "ADICIONAR" })}>Adicionar</button> 
    </div>
    <div>
      {
        listaDeTarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))
      }
    </div>
  </div>
)

}

export default App
