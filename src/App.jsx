
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import SendHome from './components/pages/sendMoney/SendHome'
import PriyoSendMony from './components/pages/sendMoney/PriyoSendMony'
import ConformSendMonye from './components/pages/sendMoney/ConformSendMonye'
function App() {
 

  return (
   <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<RootLayout/>}>
       <Route path='home' element={<Home/>}/> 
       <Route path='sendHome' element={<SendHome/>}/> 
       <Route path='priyoSendMony' element={<PriyoSendMony/>}/> 
       <Route path='conformSendMonye' element={<ConformSendMonye/>}/> 
      </Route>
    </Routes>
   </>
  )
}

export default App
