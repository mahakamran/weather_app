import React from 'react'
import First from './pages/First'
import Second from './pages/Second'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (

<>
<Routes>
<Route path='/' element={<Second/>}/>
<Route path='/maha' element={<First/>}/>
</Routes>
</>
  )
}

export default App