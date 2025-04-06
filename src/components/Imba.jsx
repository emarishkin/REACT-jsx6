import { useState } from "react"
import { differences } from "../data"

export const Imba = () => {
    const [content, setContent] = useState('Click me bot')
    return(
        <div>
            <div>
                <h3>Достоинства</h3>
                <button onClick={()=>setContent('way')}>топ</button>
                <button onClick={()=>setContent('easy')}>превосходство</button>
                <button onClick={()=>setContent('program')}>дисциплина</button>
            </div>
                <p>{differences[content]}</p>
        </div>
    )
}