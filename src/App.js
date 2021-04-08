import React from 'react';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utilities';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {    // async is used as it is asyncronous reffering api calls
      if (userAuth) {                                                           // check if user is signed in or not
        const userRef = await createUserProfileDocument(userAuth);              // await waits until expression is completed

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={SignInSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
