import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utilities';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
       </Link>
            <Link className="option" to="/shop">
                CONTACT
       </Link>
            {
                currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>) :
                    (<Link className='option' to="/sign">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ?
                null :
                <CartDropdown />
        }
    </div>
);

/* const mapStateToProps = state => ({      
   currentUser: selectCurrentUser(state),
   hidden: selectCartVisibility(state)
}); */

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartVisibility
    }
);



export default connect(mapStateToProps)(Header);