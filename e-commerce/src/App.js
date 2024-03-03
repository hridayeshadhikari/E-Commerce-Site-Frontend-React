import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRouter from './Routers/UserRouter'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<UserRouter/>}></Route>
      </Routes>
    </div>
  )
}

export default App
