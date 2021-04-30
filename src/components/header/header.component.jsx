import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink } from './header.styles';

import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.action';

const Header = ({ currentUser, hidden, signOut }) => (
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
                    (<OptionDiv onClick={signOut}>SIGN OUT</OptionDiv>) :  //OptionLink can also be used as div by <OptionLink as='div />
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

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartVisibility
    }
);

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});



export default connect(mapStateToProps, mapDispatchToProps)(Header);