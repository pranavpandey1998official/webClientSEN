import React from 'react';
import { connect } from 'react-redux';
import {
	useLocation,
	Link,
	withRouter
} from "react-router-dom";
import { logoutUser } from '../../actions/auth';



const NavBar = ({ isAuthenticated, logoutUser }) => {
	const location = useLocation();
	const renderLeft = () => {
		if (isAuthenticated) {
			return (
				<div class="navbar-item">
					<Link class="navbar-item" to='/wishList'>
						<span class="icon has-text-info is-medium">
						<i class="fas fa-list fa-lg"></i>
				  		</span>
					</Link>
					<span class="icon has-text-info is-medium">
						<i class="far fa-bell fa-lg"></i>
				  	</span>
					<div class="button is-light" onClick={logoutUser}>Logout</div>
				</div>
			);
		}
		return (
			[
				<div class="navbar-item">
					<div class="buttons">
						<Link to='/signUp' class="button is-primary">
							<strong>Sign up</strong>
						</Link>
						<Link to='/login' class="button is-light">
							Log in
						</Link>
					</div>
				</div>
			]
		);
	}
	return (
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item">
					<Link to='/'>
						<b>WSILN</b>
					</Link>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
					<Link class="navbar-item" to='/home'>
						Home
					</Link>
					<Link class="navbar-item" to='/contact'>
						Contact
					</Link>
					<Link className="navbar-item" to='/Blog'>
						Blog
					</Link>
				</div>

				<div class="navbar-end">
					{renderLeft()}
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	logoutUser: () => dispatch(logoutUser(ownProps.history))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));