import React, { useContext } from 'react'
import axios from 'axios'
import Header from '@components/Header'
import Item from '@components/Item'
import { store } from '../../store'
import './styles.scss'

export default () => {
  const { state: { items, cart }, dispatch } = useContext(store)

  const updateCart = async item => {
    try {
      const { id } = item
      const { data: { items } } = await axios.patch(
        `http://0.0.0.0:3000/api/v1/carts/:${id}`,
        { items: [...cart.items, item] }
      )
      if (items) dispatch({ type: 'UPDATE', items })
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
          <Item item={item} key={i} action={e => { updateCart(e) }} type='shop' />
        ))}
      </div>
    </div>
  )
}
