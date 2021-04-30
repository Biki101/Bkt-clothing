import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';


import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPass: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPass } = this.state;
        console.log(displayName);
        const { signUpStart } = this.props;
        if (password !== confirmPass) {
            alert("Password do not match!");
            return;
        }
        signUpStart(displayName, email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        label='Display Name'
                        name='displayName'
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required
                    />

                    <FormInput
                        type='email'
                        label='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='password'
                        label='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='password'
                        label='Confirm Password'
                        name='confirmPass'
                        value={this.state.confirmPass}
                        onChange={this.handleChange}
                        required
                    />

                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);