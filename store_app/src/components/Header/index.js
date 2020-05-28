import React from 'react'
import { A } from 'hookrouter'
import './styles.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerLink'>
        <A href='/'>Shop</A>
      </div>
      <div className='headerLink'>
        <A href='/cart'>Cart</A>
      </div>
    </div>
  )
}

export default Header
