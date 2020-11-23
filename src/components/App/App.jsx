import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
