import React from 'react'

const useCartStorage = (defaultVal, name) => {
  const [val, setVal] = React.useState(() => {
    const storedCart = window.localStorage.getItem(name)
    return storedCart !== null
      ? JSON.parse(storedCart)
      : defaultVal
  })

  React.useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(val))
  }, [name, val])

  return [val, setVal]
}

export default useCartStorage
