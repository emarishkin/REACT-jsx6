import { useState } from "react"
import { differences } from "../data"
import { Button } from "./Button"

export const Imba = () => {
    const [content, setContent] = useState('Click me bot')
    return(
        <div>
            <div>
                <h3>Достоинства</h3>
                <Button Onbot={()=>setContent('way')}>топ</Button>
                <Button Onbot={()=>setContent('easy')}>норм</Button>
                <Button Onbot={()=>setContent('program')}>круто</Button>
            </div>
                <p>{differences[content]}</p>
        </div>
    )
}