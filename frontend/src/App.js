import './App.css';
import Header from './components/Header.js';
import Recipe from './components/Recipe.js';
import Cart from './components/Cart.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Recipe />
        <Cart />
      </main>
    </div>
  );
}

export default App;
