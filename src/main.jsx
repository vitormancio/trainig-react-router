import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {Register} from './components/Register'
import {NavBar} from './components/NavBar'

import {Route,Routes,BrowserRouter} from 'react-router-dom'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index path='/' element={<App/>}/>
        <Route index path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
