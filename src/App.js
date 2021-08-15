import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductsPage} />
      </Switch>
    </Router>
  );
}

export default App;
