import React, { createContext, useReducer } from 'react'
import Store from './mock'

const store = createContext(Store)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET':
        return {
          ...state,
          cart:
          {
            items: action.cart
          }
        }
      case 'UPDATE':
        return {
          ...state,
          cart:
          {
            _id: action.id,
            items: action.cart
          }
        }
      default:
        throw new Error()
    }
  }, Store)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
