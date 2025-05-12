export function Album(prop){
    const name = prop.id%2==0 ? "even" : "odd"
    return(
        <div className="res" style={{display:"flex"}}>
        <div  className={name}>
            <img className='alb' src={prop.src}></img>
        </div>
        </div>
    )
    
}

export function Albumtwo(prop){
    const name = prop.id%2==0 ? "odd" : "even"
    return(
        <div style={{display:"flex"}}>
        <div  className={name}>
            <img className='alb' src={prop.src}></img>
        </div>
        </div>
    )
    
}
