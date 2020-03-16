import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import SignInSignUpPage from './Pages/SignIn-SignUp/SignIn-SignUp';
import ShopPage from './Pages/Shop/Shop';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { setCurrentUser } from './Redux/User/User.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.props.setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
					//console.log(this.state); //checkCurrentLoggedinUser
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStatetoProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
