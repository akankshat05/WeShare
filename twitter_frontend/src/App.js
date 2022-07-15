import Home from './components/Home';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/signup">
              <SignUp />
        </Route>
        <Route path="/signin">
              <SignIn />
        </Route>
        <Route path="/">
             <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
