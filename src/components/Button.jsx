


export const Button = ({children,Onbot,isActive}) => {
    return (
        <button className={isActive? 'button active' : 'button'} onClick={Onbot}>{children}</button>
    )
}