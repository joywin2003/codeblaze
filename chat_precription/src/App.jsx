import { useState } from 'react'
import './App.css'
import Chatbox from './components/landing_comp/chatbot'
import Navbar from './components/landing_comp/navbar'
import Chatbotpage from './pages/chatbotpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chatbotpage />
    </>
  )
}

export default App
