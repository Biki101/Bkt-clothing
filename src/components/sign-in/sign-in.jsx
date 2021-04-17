import React from 'react';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utilities';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);  // review
            this.setState({ email: '', password: '' });
        } catch (error) { console.log(error);}     
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='button'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;