'use client'
import React from 'react'
import type { RouterOutputs } from '~/trpc/shared'
import { useState } from 'react'
//utulize the type from the trpc server
//using routerOutputs uses the type returned from the server
//when calling the square.get procedure. By using 0, we specify that we dont
//want the list type but the single type of square
type Square = RouterOutputs['square']['get'][0]

const Square = (props: Square) => {
  const { number, status } = props
  const [currentStatus, setCurrentStatus] = useState(status)
  const toggle = () => {
    setCurrentStatus(currentStatus === 'open' ? 'pending' : 'open')
  }
  return (
    <div className={`${currentStatus === 'open' ? 'bg-emerald-500' : currentStatus === 'pending' ? 'bg-yellow-300' : 'bg-red-500'} border-2 rounded border-black w-9 h-9`} onClick={toggle}>
      <p>{number}</p>
    </div>
  )
}

export default Square