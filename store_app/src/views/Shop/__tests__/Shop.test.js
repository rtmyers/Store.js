import React from 'react'
import { render } from '@testing-library/react'
import Shop from '../../Shop'

import { StateProvider } from '../../../store'

it('ShopComponent renders the items', () => {
  const { getByText } = render(
    <StateProvider>
      <Shop />
    </StateProvider>
  )
  expect(getByText('Shop')).toBeInTheDocument()
})

it('ShopComponent renders the items', () => {
  const { getByText } = render(
    <StateProvider>
      <Shop />
    </StateProvider>
  )
  expect(getByText('Cart')).toBeInTheDocument()
})
