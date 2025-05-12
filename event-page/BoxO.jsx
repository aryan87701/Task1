export function BoxO(props){
    return(
        <div id='box'>

             <div className='image'><img className='img'  src={props.img}></img></div>

            <div className='detail'>
                <h2>{props.title}</h2>
                <div>{props.date}</div>
                <div>{props.loc}</div>
                <div>{props.info}</div>
             </div>

        </div>
    )
}