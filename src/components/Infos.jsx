

export const Infos = ({infos}) =>{
    return (
       <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {infos.map(info=>(
                <div style={{border:'1px solid black',marginBottom:10,width:1100,borderRadius:20,padding:10}} key={info.title}>
                   <p><strong>{info.title}</strong> {info.descriptions}</p>
                </div>
              ))}
       </div>
    )
}