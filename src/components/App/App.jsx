import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import DashboardMentor from "../DashboardMentor/DashboardMentor";
import ErrorPage from '../ErrorPage/ErrorPage';

const theme = createMuiTheme({
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
        fontFamily: [
            'Ubuntu',
            'Montserrat',
            'Kumbh Sans',
            'Cantarell'
        ].join(',')
    }
})

function App() {
    const [loginID, setLoginID] = React.useState('');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (loginID === '') {
            if (sessionStorage.getItem('TOK')) {
                setLoginID(sessionStorage.getItem('TOK'));
                setIsLoggedIn(sessionStorage.getItem('WILI'));
            }
        }
    }, [loginID])

    const changeLoginStatus = (value) => {
        sessionStorage.setItem('WILI', value)
        setIsLoggedIn(value);
    }

    const handleLogin = (value) => {
        sessionStorage.setItem('TOK', value);
        setLoginID(value);
    }

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={changeLoginStatus} setLoginID={handleLogin} />
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact>
                            <Login setLoginID={handleLogin} setIsLoggedIn={changeLoginStatus} />
                        </Route>
                        <Route path='/signup' exact>
                            <Signup setLoginID={handleLogin} setIsLoggedIn={changeLoginStatus} />
                        </Route>
                        <Route path='/dashboard' exact>
                            {isLoggedIn === "student" ? <Dashboard loginID={loginID} /> : <Login setLoginID={handleLogin} setIsLoggedIn={changeLoginStatus} />}
                        </Route>
                        <Route path='/dashboard-mentor' exact>
                            {isLoggedIn === "mentor" ? <DashboardMentor loginID={loginID} /> : <Login setLoginID={handleLogin} setIsLoggedIn={changeLoginStatus} />}
                        </Route>
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
