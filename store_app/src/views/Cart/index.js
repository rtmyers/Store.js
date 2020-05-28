import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import Header from '@components/Header'
import Item from '@components/Item'
import { store } from '../../store'
import './styles.scss'

export default () => {
  const { state, state: { cart: { items } }, dispatch } = useContext(store)

  useEffect(() => {
    async function fetchData () {
      try {
        const { data } = await axios('http://0.0.0.0:3000/api/v1/carts/:1')
        if (data) {
          dispatch({ type: 'SET', cart: { items: [...state.cart.items, ...data] } })
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  async function removeItem ({ id }) {
    try {
      const cartItems = state.cart.items.filter(val => val.id !== id)
      const { data: { cart } } = await axios.patch(
        `http://0.0.0.0:3000/api/v1/carts/:${id}`,
        { cart: cartItems }
      )
      dispatch({ type: 'SET', cart: { items: cart } })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='contain'>
      <Header />
      <div className='cartContain'>
        {items.map((item, i) => (
          <Item item={item} key={i} action={e => { removeItem(e) }} type='cart' />
        ))}
      </div>
    </div>
  )
}
