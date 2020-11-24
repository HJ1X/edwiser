import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl"
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
