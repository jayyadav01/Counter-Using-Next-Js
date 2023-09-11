'use client'
import React, { useState } from 'react'


function Counter() {
    const [count,setcount] = useState(0)
  return (
    <>
      <button disabled={count>=10} onClick={() => setcount((count<10) ? count+1 : count)}>inc</button>
      <p>{count}</p>
      <button disabled={count<=0} onClick={() => setcount((count>0) ? count-1 : count)}>dec</button>
    </>
  )
}

export default Counter
 