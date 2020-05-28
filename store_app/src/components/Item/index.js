import React from 'react'
import propTypes from 'prop-types'
import './styles.scss'

const Item = ({ item, action, type }) => {
  const handleClick = () => action(item)
  const price = `$${item.price}`
  const text = type === 'cart' ? 'Remove From Cart' : 'Add To Cart'

  return (
    <div className='item'>
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{price}</div>
      <div className='button' onClick={handleClick}>{text}</div>
    </div>
  )
}

Item.PropTypes = {
  action: propTypes.func,
  item: propTypes.object
}

export default Item
