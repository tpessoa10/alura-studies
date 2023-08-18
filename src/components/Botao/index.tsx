import style from './Botao.module.scss'


export default function Botao({texto, type, onClick}: {texto: string, type?:"button" | "submit" | "reset" | undefined, onClick?:() => void}){
    return(
        <button type={type} className={style.botao} onClick={onClick}>
            {texto}
        </button>
    )
} 