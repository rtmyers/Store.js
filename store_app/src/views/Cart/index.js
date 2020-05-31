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
        await dispatch({ type: 'SET', cart: { items: cartItems } });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function removeItem({ id }) {
    try {
      const cartItems = cart.items.filter(val => val.id !== id);
      dispatch({ type: 'SET', cart: { items: cartItems } });
    } catch (err) {
      console.error(err);
    }
  }

  const noItems = cart.items.length < 1;
  console.log(noItems);
  return (
    <div className="contain">
      <Header />
      <div className="cartContain">
        {noItems ? (
          <div>Your Cart Is Empty</div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
