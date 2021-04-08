import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.style.scss';

const SignInSignOutPage = () => (
    <div className="sign-in-sign-out">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignOutPage;