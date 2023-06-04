import { useState } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartProvider';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  
  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <CartProvider>
      <Header viewCart={viewCart} setViewCart={setViewCart}  />
      { pageContent }
      <Footer viewCart={viewCart} />
    </CartProvider>
  );

  return content;
}

export default App;