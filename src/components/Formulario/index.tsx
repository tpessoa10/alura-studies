import { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefa } from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid'

export default function Formulario({setTarefas}: {setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>}){
    let[tarefa, setTarefa] = useState('')
    let[tempo, setTempo] = useState('00:00')
 
    function adicionarTarefas(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo, selecionado:false, completado:false, id:uuidv4()}])
        setTarefa('')
        setTempo('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefas}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adcione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" value={tarefa} required onChange={evento => setTarefa(evento.target.value)} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" value={tempo} required onChange={evento => setTempo(evento.target.value)}/>
            </div>
            <Botao texto='Adicionar' type='submit'/>
        </form>
    )
}