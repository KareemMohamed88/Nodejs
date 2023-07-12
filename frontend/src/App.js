import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./screens/home"
import ProjectDetalis from "./screens/projectDetalis"
import Registeration from './screens/registeration';
import Login from './screens/login';
import Error from './screens/404';
import Install from './screens/Install';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Registeration/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/install' element={<Install/>}></Route>
      <Route path='/project-detalis/:id' element={<ProjectDetalis/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

export default App