import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import Header from '@components/Header';
import Item from '@components/Item';
import { store } from '../../store';
import './styles.scss';

export default () => {
  const {
    state: { cart, items },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios('http://0.0.0.0:3000/api/v1/carts');
        const items = data ? [...cart.items, ...data] : [...cart.items];
        await dispatch({ type: 'SET', cart: { items } });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function removeItem({ id }) {
    try {
      const cartItems = cart.items.filter(val => val.id !== id);
      const {
        data: { items },
      } = await axios.put('http://0.0.0.0:3000/api/v1/carts', {
        items: [...cartItems],
      });
      dispatch({ type: 'SET', cart: items });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="contain">
      <Header />
      <div className="cartContain">
        {cart.items.map((item, i) => (
          <Item
            item={item}
            key={i}
            action={e => {
              removeItem(e);
            }}
            type="cart"
          />
        ))}
      </div>
    </div>
  );
};
