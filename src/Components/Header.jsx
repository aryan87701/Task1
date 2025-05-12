import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
export default function Header() {


  return (
    <div className='w-full h-20 flex justify-center my-2 absolute'>
     <nav className='z-10 backdrop-blur-xl  h-10 flex justify-center items-center p-4 rounded-xl navb'>
        <ul className='list-none flex gap-8 navfont'>
           <NavLink to="/"  className={({ isActive }) =>
                    isActive
                      ? ' font-bold underline'
                      : 'text-black hover:underline transition'
                  }>Home</NavLink>
            <NavLink to="/About" className={({ isActive }) =>
                    isActive
                   ? ' font-bold underline'
                      : 'text-black hover:underline'
                  }><li>About</li></NavLink>
            <NavLink to="/Event" className={({ isActive }) =>
                    isActive
                  ? ' font-bold underline'
                      : 'text-black hover:underline'
                  }><li>Events</li></NavLink>
            <NavLink to="/Contact" className={({ isActive }) =>
                    isActive
               ? ' font-bold underline'
                      : 'text-black hover:underline'
                  }><li>Contact</li></NavLink>
        
        </ul>
     </nav>
  
     {/* <div className='behnavbou'><div className='behnav'></div> </div> */}
    </div>
    )
}
