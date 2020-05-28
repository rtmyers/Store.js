import React, { createContext, useReducer } from 'react'
import Store from '@mocks/store'

const store = createContext(Store)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET':
        return ({ ...state, cart: action.cart })
      case 'UPDATE':
        return ({ ...state, cart: { items: action.items } })
      default:
        throw new Error()
    };
  }, Store)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
