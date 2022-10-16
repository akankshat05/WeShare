import Home from './components/Home';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import EmailSignUp from './components/EmailSignUp'
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
        <Route path="/home">
              <Home />
        </Route>
        <Route path="/signin">
              <SignIn />
        </Route>
        <Route path="/email/signup">
             <EmailSignUp />
        </Route>
        <Route path="/">
             <SignUp />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
