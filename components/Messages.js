import React from 'react'
import SendMessage from '../components/SendMessage';
import {useMoralisQuery} from 'react-moralis'
import Message from './Message';
const MINS_DURATION = 1500;

function Messages() {
  const {data,loading,error} = useMoralisQuery(
    'Messages',
    (query) => query.ascending("createdAt").greaterThan("createdAt",new Date(Date.now() -1000 * 60 *MINS_DURATION)
    ),[],
    {
      live:true,
    }
  );
  console.log(data);
  return (
    <div >
        {/* <h1 className='text-blue-500 font-semibold text-2xl'>I am Messages</h1> */}
    
    <div className='space-y-4 p-4 '>
      {data.map((message)=>(
        <Message key={message.id} message={message}/>
      ))}
        </div>
    <div className='flex justify-center '>
    <SendMessage />
    </div>
    </div>
  )
}

export default Messages