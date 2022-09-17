import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App'
import {Register} from './components/Register'
import {NavBar} from './components/NavBar'
import {NotFoundPage} from './components/NotFoundPage'

import {Route,Routes,BrowserRouter} from 'react-router-dom'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index path='/' element={<App/>}/>
        <Route path='/register/' element={<Register/>}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
