import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRouter from './Routers/UserRouter'
import AdminRouter from './Routers/AdminRouter'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserRouter/>}></Route>
        <Route path='/admin/*' element={<AdminRouter/>}/>
      </Routes>
    </div>
  )
}

export default App
