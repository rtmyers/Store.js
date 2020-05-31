import React, { useContext } from 'react'
import axios from 'axios'
import Header from '@components/Header'
import Item from '@components/Item'
import { store } from '../../store'
import './styles.scss'

export default () => {
  const { dispatch, state } = useContext(store)
  const { items, cart } = state
  const updateCart = async item => {
    try {
      const duplicate = cart.items.filter(_item => {
        return _item.id === item.id
      })
      if (duplicate.length === 0) {
        const cartItems = { items: [ ...cart.items, item ] }
        const { data } = await axios.put(
          'http://0.0.0.0:3000/api/v1/carts',
          cartItems
        )
        const { items } = data
        if (items) dispatch({ type: 'UPDATE', cart: cartItems })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const itemList = items.filter(item => {
    for (const key of cart.items) {
      if (key.id === item.id) return false
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
