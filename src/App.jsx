import { useState } from 'react'
import Header from './components/Header'
import Usuarios from './views/Usuarios'
import Camareros from './views/Camareros'


import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <main>
      <Usuarios/>
    </main>
    <footer>
      <Camareros/>

    </footer>
    

      
    </>
  )
}

export default App
