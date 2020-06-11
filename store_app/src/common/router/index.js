import React from 'react'
import { useRoutes } from 'hookrouter'
import routes from './routes'
import Error from '@components/Error'

const Router = () => {
  const routeResult = useRoutes(routes)
  return <Error>{routeResult}</Error>
}

export default Router
