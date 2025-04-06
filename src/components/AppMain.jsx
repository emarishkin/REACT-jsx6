import { useState } from "react"
import { infos } from "../data"
import { Infos } from "./Infos"
import { Imba } from "./Imba"


export const AppMain = () =>{



    return (
        <div>
           <div>
            <h3>Наша уникальность</h3>
            <Infos infos={infos} />
           </div>
            <Imba />
        </div>
    )
}