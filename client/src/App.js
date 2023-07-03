import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import ProjectDetalis from "./pages/projectDetalis"
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id' element={<ProjectDetalis/>}></Route>
    </Routes>
  )
}

export default App