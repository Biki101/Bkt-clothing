import React, { useState } from 'react';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignIn = ({ emailSignIn, googleSignIn }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignIn(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }
    return (
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='button'>
                    <CustomButton type='submit'> SIGN IN </CustomButton>
                    <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                </div>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);