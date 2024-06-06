import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

export const App = () => (
  <div className="App">
    <h1>Product Catalog</h1>
    <Header />
    <Footer />
    <ProductCard />
  </div>
);
