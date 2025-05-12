import {imgdata} from './imgdata'
import {Album} from './Album'
import {Albumtwo} from './Album'
import { greetdata } from './greet'
import {MeetG} from './MeetG'

export function Section(){

    const photo = imgdata.map((img) => (
         <Album key={img.id}
           src={img.src}
           id={img.id}
         />
      
    ))

    const gree= greetdata.map((img) => (
         <MeetG key={img.id}
           src={img.src}
           name={img.name}
         />
    ))

    const photos = imgdata.map((img) => (
         <Albumtwo key={img.id+4}
           src={img.src}
           id={img.id}
         />
    ))
    

    return(
        <div className='gridcont'>
            <div className='img-grid' id='img-grid'>
                {photo}

            </div>

            <div className='meet'>
                {gree}
            </div>

            <div className='img-grid double'>
                {photos}
            </div>
        </div>
    )
}