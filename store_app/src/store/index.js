import React, { createContext, useReducer } from 'react'
import Store from './mock'

const store = createContext(Store)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET':
        console.log('IN SET', action.cart)
        console.log('YYYY', { ...state, cart: { items: action.cart } })
        return { ...state, cart: { items: action.cart } }
      case 'UPDATE':
        console.log(action)
        const cart = { _id: action.id, items: action.cart }
        console.log('cart', cart)
        const x = { ...state, cart }
        console.log('XXX', x)
        return x
      default:
        throw new Error()
    }
  }, Store)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
