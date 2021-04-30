import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {checkUserSession} from './redux/user/user.action';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckOutPage from './pages/checkout/checkout';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
}

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />           {/* not exact as we add categories like hat and others */}
          <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignOutPage />)} />
          <Route exact path='/checkout' component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);                          //mapStateToProps is passed as we need state to props from reducer in app component
