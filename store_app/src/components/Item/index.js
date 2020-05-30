import React from 'react';
import { string, func, bool, object } from 'prop-types';
import './styles.scss';

const Item = ({ item, action, type }) => {
  const handleClick = () => action(item);
  const text = type === 'cart' ? 'Remove From Cart' : 'Add To Cart';

  return (
    <div className="item">
      <div>{item.name}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <div className="button" onClick={handleClick}>
        {text}
      </div>
    </div>
  );
};

Item.propTypes = {
  action: func.isRequired,
  item: object.isRequired,
  type: string,
};

export default Item;
