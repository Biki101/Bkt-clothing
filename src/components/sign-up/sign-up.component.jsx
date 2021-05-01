import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';


import './sign-up.style.scss';

const SignUp = ({ signUpStart }) => {
    const [ userCredentials, setUserCredentials ] = useState({ displayName: '', email: '', password: '', confirmPass: '' });
    const { displayName, email, password, confirmPass } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPass) {
            alert("Password do not match!");
            return;
        }
        signUpStart(displayName, email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    label='Display Name'
                    name='displayName'
                    onChange={handleChange}
                    value={displayName}
                    required
                />

                <FormInput
                    type='email'
                    label='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type='password'
                    label='Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    type='password'
                    label='Confirm Password'
                    name='confirmPass'
                    value={confirmPass}
                    onChange={handleChange}
                    required
                />

                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);