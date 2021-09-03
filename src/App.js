import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />

          </Route>
        </Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
