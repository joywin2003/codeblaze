import React from 'react'
import Message from './message'
import {BsAppIndicator, BsCollectionPlay, BsFillSendFill} from 'react-icons/bs'
import { useState, useRef } from 'react'
import MapModal from './MapModal'
import { SiGooglemaps } from "react-icons/si";




function Chatbox() {
    const [value, setValue] = useState('')
    const [chats, setChats] = useState([])
    const [isMapModalOpen, setMapModalOpen] = useState(false);
    const dialog = useRef();
        const appendItem = (newItem) => {
            setChats(preItem => [...preItem, newItem])       
          
            console.log(chats)
        }
    

        const messageSend = async (e) => {
            e.preventDefault()
            console.log(value)
            appendItem(value)
            setValue("")
            const response = await fetch("https://ed6a-106-196-22-31.ngrok-free.app/response", {
                method : "POST",       
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'text': value})
            })

            const data = await response.json()
            console.log(data['response'])
            const responseString = data['response']
            // appendItem(responseString)
            const pattern = /content=/;
            const modifiedText = responseString.replace(pattern, '');
            appendItem(modifiedText.slice(1,-1));
            setValue("")
        }

        const openMapModal = () => {
            setMapModalOpen(true);
            dialog.current.showModal();
            console.log('open')
        };
    
        const closeMapModal = () => {
            setMapModalOpen(false);
            dialog.current.close();
        };




    return (
        <>
       
            <MapModal ref={dialog} onClose={closeMapModal} />
     
        <div className='w-full h-screen bg-slate-800 mx-auto'>
            
                {chats.map((message, index) => (
                    <Message message={message} index={index} />

                ))}

            </div>
            <div className='flex fixed bottom-0 p-6 bg-slate-700 w-full'>
                <form onSubmit={messageSend} className='w-full flex'>
                    <input className='input w-full' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' className='ml-4'><BsFillSendFill size={30} /></button>
                    <button className='ml-4' onClick={openMapModal}><SiGooglemaps size={30}/></button>
                </form>
            
            </div>        
        </>

    )
}

export default Chatbox