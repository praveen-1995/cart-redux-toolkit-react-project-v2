import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      <Navbar />
      <CartContainer />
      <Modal />
    </main>
  );
}

export default App;
