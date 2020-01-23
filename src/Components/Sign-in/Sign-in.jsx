import React from 'react';
import './Sign-in.scss';
import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-button/Custom-button';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h1>I already have account.</h1>
				<span>Login with exsisting account.</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						label="Email"
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						label="Password"
						value={this.state.password}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{' '}
							Sign in with Google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
