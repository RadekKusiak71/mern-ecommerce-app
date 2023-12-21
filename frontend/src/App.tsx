import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import Card from './layout/Card';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import OrderPage from './pages/OrderPage';


function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Card>
          <div className={'main-container'}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/product/:id/' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/order' element={<OrderPage />} />
            </Routes>
          </div>
        </Card>
        <Footer />

      </CartProvider>
    </Router>
  );
}

export default App;
