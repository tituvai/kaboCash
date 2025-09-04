
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
function App() {
 

  return (
   <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<RootLayout/>}>
       <Route path='home' element={<Home/>}/> 
      </Route>
    </Routes>
   </>
  )
}

export default App
