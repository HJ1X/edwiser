import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { dark } from "@material-ui/core/styles/createPalette";

const theme = createMuiTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl"
        }
    },
    palette: {
        primary: {
            main: '#3f72af',
            light: '#dbe2ef',
            dark: '#112d4e'
        },
        secondary: {
            main: '#f05454',
            light: '#f9f7f7',
            dark: '#af2d2d'
        }
    },
    typography: {
        fontFamily: []
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
