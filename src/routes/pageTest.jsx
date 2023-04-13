import React from 'react'
import { useState } from 'react'

function pageTest() {

  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  function ComponentTestState_1() {
      return (
        <div>
          <h1>State 1: {count}</h1>
        </div>
      )
  }
  function ComponentTestState_2() {
      return (
        <div>
          <h1>State 2: {count}</h1>
        </div>
      )
  }
  function Card(props) {
    return (
      <div className={isOpen ? 'mb-4 hidden' : 'mb-4 block'}>
        <img 
          className="rounded mx-auto h-[100px]"  
          src={props.src} 
          alt="" 
        />
      </div>
    )
  }

  return (
    <>
      <h1>Test</h1>
      <section className='w-3/4 mx-auto'>
        <button 
          className='p-2 mx-2 border rounded text-white !bg-indigo-500 hover:!bg-indigo-800' 
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <ComponentTestState_1 />
        <ComponentTestState_2 />
      </section>

      <section className='w-3/4 mx-auto'>
        <button 
          className='p-2 mx-2 border rounded text-white !bg-indigo-500 hover:!bg-indigo-800' 
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "Show" : "Hidden"}
        </button>
        <Card src="https://i.imgur.com/xCynxvZ.jpeg" />
        <Card src="https://i.imgur.com/4wqITIU.jpeg" />
        <Card src="https://i.imgur.com/A49PBwZ.jpeg" />
      </section>
    </>
  )
}

export default pageTest
