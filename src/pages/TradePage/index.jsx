import React from 'react'
import { Timer } from '../../component/Timer'

export const TradePage = () => {
  return (
    <div className='container'>
      <header className='header'>Ход торгов</header>
      <Timer />
    </div>
  )
}
