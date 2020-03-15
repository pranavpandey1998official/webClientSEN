import React from 'react';
import { Icon } from 'antd';
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
		if(isAuthenticated) {
			return (
				[
					
					<Link class="navbar-item" to='/wishList'><Icon type="crown" style={{fontSize: 20, margin: 0}}/></Link>,
					<a class="navbar-item"><Icon type="bell" style={{fontSize: 20, margin: 0}}/></a>,
					<div class="navbar-item" onClick={logoutUser}>Logout</div>,
				]
			);
		}
		return (
				[
					<div class="navbar-item">
						<div class="buttons">
						<Link to='/login' class="button is-primary">
							<strong>Sign up</strong>
						</Link>
						<Link to='/signUp' class="button is-light">
							Log in
						</Link>
						</div>
					</div>
				]
		);
	}
	return(
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
					<Link class="navbar-item">
						Home
					</Link>
					<Link class="navbar-item">
						Contact
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