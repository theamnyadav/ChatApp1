import React, { useState } from "react";
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const {user,Moralis} = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) =>{
    e.preventDefault();



if(!message) return;

    const Message = Moralis.Object.extend("Messages")
    const messages = new Message();

    messages.save({
      message:message,
      username:user.getUsername(),
       ethAddress : user.get('ethAddress')
    }).then((message)=>{
      // The object was saved successfully
    })
    setMessage("")
  }
  return (
    <form className="flex fixed bottom-12 w-11/12  py-4 bg-slate-100 px-6 max-w-2xl border-2 border-blue-400 rounded-xl   opacity-80 ">
      <input
        type="text"
        className="outline-none bg-transparent pr-5 flex-grow bg-slate-100 text-black  placeholder-black"
        placeholder="Type a Message here"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button type='submit' onClick={sendMessage} className="font-bold text-blue-300">Send</button>
    </form>
  );
}

export default SendMessage;
