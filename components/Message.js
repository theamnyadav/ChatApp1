import React from 'react'
import {useMoralis} from 'react-moralis'

function Message({ message }) {
    
    const {user} = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    
  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>

    <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
    </div>

    <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? "rounded-br-none my-2 bg-pink-300" : "rounded-bl-none my-2 bg-blue-400"}`}>

        <p>{message.get('message')}</p>
        </div>
    </div>
  )
}

export default Message