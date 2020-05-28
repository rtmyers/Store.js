import React from 'react'
import Store from '@views/Shop'
import Cart from '@views/Cart'
import NotFound from '@views/NotFound'

const routes = {
  '/': () => <Shop />,
  '/store': () => <Shop />,
  '/cart': () => <Cart />,
  '/404': () => <NotFound />
}

export default routes
