import { infos } from "../data"
import { Infos } from "./Infos"


export const AppMain = () =>{
    return (
        <div>
           <div>
            <h3>Наша уникальность</h3>
            <Infos infos={infos} />
           </div>
        </div>
    )
}