import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Fashion-E-Commerce-Store';
import Women from './pages/Womens-Fashion-Store';
import Children from './pages/Kids-Fashion-Store.tsx';
import Men from './pages/Mens-Fashion-Store';
// Update the import path and extension if the file exists with a different name or extension
import Accessories from './pages/Accessories-Fashion-Store.tsx';
// Or, for example, if the file is named AccessoriesFashionStore.tsx:
 // import Accessories from './pages/AccessoriesFashionStore';
import Checkout from './pages/Checkout.tsx';
import KidsProductDetails from './pages/Kids-Product-Details';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/kids-product-details/:id" element={<KidsProductDetails />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
