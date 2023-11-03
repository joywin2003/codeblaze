import React from 'react'
import Message from './message'
import {BsAppIndicator, BsCollectionPlay, BsFillSendFill} from 'react-icons/bs'
import { useState } from 'react'



function Chatbox() {
    const [value, setValue] = useState('')
    const [chats, setChats] = useState([])
    const messageList = ["hello", "my", "name", "is", "sam"]
        
        const appendItem = (newItem) => {
            setChats(preItem => [...preItem, newItem])       
          
            console.log(chats)
        }
    

        const messageSend = async (e) => {
            e.preventDefault()
            console.log(value)
            appendItem(value)
            setValue("")
            const response = await fetch("http://127.0.0.1:8000/message", {
                method : "POST",       
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'message': value})
            })

            const data = await response.json()
            console.log(data)
            appendItem(data['hello'])
            setValue("")
        }

        const uploadPdf = async (e) => {
            
        }

    



    return (
        <>
            <div className='w-full h-screen bg-slate-800 mx-auto'>
                {chats.map((message, index) => (
                    <Message message={message} index={index} />

                ))}

            </div>
            <div className='flex fixed bottom-0 p-6 bg-slate-700 w-full'>
                <form onSubmit={messageSend} className='w-full flex'>
                    <input className='input w-full' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' className='ml-4'><BsFillSendFill size={30} /></button>
                </form>
            </div>        

        </>
    )
}

export default Chatbox