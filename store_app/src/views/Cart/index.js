import React, { useEffect, useContext } from 'react'
import useCartStorage from '@hooks/cartsStorage'
import axios from 'axios'
import Header from '@components/Header'
import Item from '@components/Item'
import { store } from '../../store'
import './styles.scss'

export default () => {
  const {
    state: { cart },
    dispatch
  } = useContext(store)

  const [, setCart] = useCartStorage(cart, 'cart')

  useEffect(() => {
    async function fetchData () {
      try {
        if (cart._id) {
          const { data } = await axios(`http://0.0.0.0:3000/api/v1/carts/${cart._id}`)
          const items = data ? [...cart.items, ...data] : [...cart.items]
          setCart({ ...cart, items })
          dispatch({ type: 'UPDATE', cart: items, id: cart._id })
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  async function removeItem ({ _id }) {
    try {
      const cartItems = cart.items.filter(val => val._id !== _id)
      const { data: { items } } = await axios.put('http://0.0.0.0:3000/api/v1/carts', {
        items: cartItems
      })
      setCart({ ...cart, items })
      dispatch({ type: 'UPDATE', cart: items, id: cart._id })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='contain'>
      <Header />
      <div className='cartContain'>
        {cart.items.map((item, i) => (
          <Item
            item={item}
            key={i}
            action={e => {
              removeItem(e)
            }}
            type='cart'
          />
        ))}
      </div>
    </div>
  )
}
