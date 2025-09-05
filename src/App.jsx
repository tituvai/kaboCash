
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import SendHome from './components/pages/sendMoney/SendHome'
function App() {
 

  return (
   <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<RootLayout/>}>
       <Route path='home' element={<Home/>}/> 
       <Route path='sendHome' element={<SendHome/>}/> 
      </Route>
    </Routes>
   </>
  )
}

export default App
