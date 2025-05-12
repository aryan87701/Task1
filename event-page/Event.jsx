
import React from "react";
import datas from "./datas";
import {Boxe} from './Box';
import {BoxO} from './BoxO';



export default function Event(){



  return (
    <div className="event">
      <h1 className='h' >Upcoming Events</h1>
      <ul>
        {datas.map((data) => {if(data.id%2!=0)return(
          <Boxe key={data.id}
           title={data.title}
           date={data.date} 
           loc={data.location}
           info={data.discription}
           img={data.src}
             />
        )
        else return(
          <BoxO key={data.id}
           title={data.title}
           date={data.date} 
           loc={data.location}
           info={data.discription}
           img={data.src}
           />
        )
        })}
      </ul>
    </div>
  );
};
