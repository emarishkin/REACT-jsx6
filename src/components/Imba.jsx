import { useState } from "react"
import { differences } from "../data"
import { Button } from "./Button"

export const Imba = () => {
    const [content, setContent] = useState('Click me bot')
    return(
        <div>
            <div>
                <h3>Достоинства</h3>
                <Button isActive={content==='way'} Onbot={()=>setContent('way')}>топ</Button>
                <Button isActive={content==='easy'} Onbot={()=>setContent('easy')}>норм</Button>
                <Button isActive={content==='program'} Onbot={()=>setContent('program')}>круто</Button>
            </div>
                
                {!content && <p>yyedfwf</p>}
                {content && <p>{differences[content]}</p>}
        </div>
    )
}