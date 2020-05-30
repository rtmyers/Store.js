import React, { useContext } from 'react';
import axios from 'axios';
import Header from '@components/Header';
import Item from '@components/Item';
import { store } from '../../store';
import './styles.scss';

export default () => {
  const {
    dispatch,
    state: { items, cart },
  } = useContext(store);

  const updateCart = async item => {
    try {
      // const { id } = item
      let cartItems;
      const duplicate = cart.items.filter(_item => _item.id !== item.id);
      console.log('duplicate', duplicate);
      if (duplicate.length) {
        cartItems = { items: [...cart.items, item] };
        console.log({ items: [...cart.items, item] });
      } else {
        cartItems = { items: [item] };
      }

      const {
        data: { items },
      } = await axios.put('http://0.0.0.0:3000/api/v1/carts', cartItems);
      console.log(items);
      if (items) dispatch({ type: 'UPDATE', cart: items });
    } catch (err) {
      console.error(err);
    }
  };

  const itemList = items.filter(item => {
    for (const key of cart.items) {
      if (key.id === item.id) return false;
    }
    return true;
  });

  return (
    <div className="contain">
      <Header />
      <div>
        {itemList.map((item, i) => (
          <Item
            item={item}
            key={i}
            action={e => {
              updateCart(e);
            }}
            type="shop"
          />
        ))}
      </div>
    </div>
  );
};
