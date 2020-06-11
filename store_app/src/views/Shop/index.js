import React, { useContext } from 'react'
import axios from 'axios'
import Header from '@components/Header'
import Item from '@components/Item'
import { store } from '../../store'
import './styles.scss'

export default () => {
  const {
    dispatch,
    state: { items, cart }
  } = useContext(store)

  const updateCart = async item => {
    try {
      const duplicate = cart.items.filter(_item => _item.id !== item.id)
      const cartItems = duplicate.length < 1
        ? { items: [...cart.items, item] }
        : { items: [item] }
      const response = (cart._id)
        ? await axios.patch(`http://0.0.0.0:3000/api/v1/carts/${cart._id}`, cartItems)
        : await axios.put('http://0.0.0.0:3000/api/v1/carts/', cartItems)

      const { data: { _id, items } } = response

      if (items) {
        dispatch({ type: 'UPDATE', cart: items, id: _id })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const itemList = items.filter(item => {
    for (const key of cart.items) {
      if (key._id === item._id) return false
    }
    return true
  })

  return (
    <div className='contain'>
      <Header />
      <div>
        {itemList.map((item, i) => (
          <Item
            item={item}
            key={i}
            action={e => {
              updateCart(e)
            }}
            type='shop'
          />
        ))}
      </div>
    </div>
  )
}
