import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import Login from './Auth/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './NavBar';
import SignUp from './Auth/SignUp';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import Info from './Info';
import LandingPage from './LandingPage';
import ResetPassword from './Auth/Reset';
import Main from './Main'


class App extends Component {

  componentDidMount() {
    const authToken = localStorage.getItem('jwtToken');
    if (authToken) {
      
    }
  }
  render() {
    return (
        <Router >
        <Layout>
          <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route>
              <NavBar />
              <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <Route path="/info/:info">
                  <Info />
                </Route>
                <Route path="/reset-password/:token">
                  <ResetPassword />
                </Route> 
                <Router path="/home">
                  <Main />
                </Router>
                <Router path="/Main">
                  <Main />
                </Router>
              </Switch>
              </Route>
            </Switch>
          </Layout>
          <ToastContainer />
        </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
