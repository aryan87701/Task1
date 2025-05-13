import React from 'react'
import arthur from './../assets/arthur.png'
function Homemain() {
  return (
    <div>
        <div className='welcome'>
            <h2>WELCOME TO OUR CLUB</h2>
            <h1>BADBOYS</h1>
        </div>
        <div className='arthur'><img src={arthur} alt="sad"/></div>
        <div className='homeabout'>
        <p className='homep'>Badboys Club is a private organization committed to cultivating principles of resilience, leadership, and brotherhood. Founded in 2019, the club embraces the spirit of independence, self-reliance, and mutual respect. Members are united by a shared appreciation for tradition, discipline, and personal growth, drawing inspiration from the values of frontier-era camaraderie and honor.

The club hosts regular meetings focused on strategic planning, skill development, and community outreach. Activities include wilderness training, horseback riding, history discussions, and leadership seminars designed to promote character and teamwork. Every member is expected to uphold the club’s code of ethics, which emphasizes loyalty, responsibility, and discretion. 
.


 </p>
        </div>
    </div>

  )
}

export default Homemain;
