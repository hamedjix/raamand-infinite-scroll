import Header from './components/Header';

import Login from './pages/Login';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
