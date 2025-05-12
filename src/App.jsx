import Home from '../pages/Home'
import './App.css'
import Header from './Components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import About from '../about-page/About'
import Event from '../event-page/Event'


function App() {
  return (
    <BrowserRouter>
<Header/>

<main>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Event' element={<Event/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes>
</main>

    
    </BrowserRouter>
  )
}

export default App
