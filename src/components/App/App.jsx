import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
