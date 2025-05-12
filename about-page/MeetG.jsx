export function MeetG(prop){
    return(
        <div className="person">
            <div className="me"><img src={prop.src}/></div>
            <span>{prop.name}</span>
        </div>
    )
}