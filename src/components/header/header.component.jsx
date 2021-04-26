import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink } from './header.styles';

import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utilities';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
       </OptionLink>
            <OptionLink to="/shop">
                CONTACT
       </OptionLink>
            {
                currentUser ?
                    (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>) :  //OptionLink can also be used as div by <OptionLink as='div />
                    (<OptionLink to="/sign">SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ?
                null :
                <CartDropdown />
        }
    </HeaderContainer>
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