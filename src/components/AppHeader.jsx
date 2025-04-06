import { useState } from "react"
import logo from '/logo.png'

export const AppHeader = () =>{ 

    const [now,setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()),1000)

    return (
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid black'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <img style={{width:80,height:40}} src={logo} alt="" />
            <h3>Сайт</h3>
          </div>
          {now.toLocaleTimeString()}
          <button>Click</button>
        </div>
    )
}