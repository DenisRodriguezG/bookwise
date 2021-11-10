import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/main">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

