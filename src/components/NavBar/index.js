import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import {
	useLocation,
	Link,
	withRouter
  } from "react-router-dom";
import { logoutUser } from '../../actions/auth';

const { Header, Content, Footer } = Layout;


const NavBar = ({ isAuthenticated, logoutUser }) => {
	const location = useLocation();
	const renderLeft = () => {
		if(isAuthenticated) {
			return (
				[
					<Menu.Item key="/login" style={{float: 'right'}}><div onClick={logoutUser}>Logout</div></Menu.Item>,
					<Menu.Item key="/wishList" style={{float: 'right'}}><Link to='/wishList'><Icon type="crown" style={{fontSize: 20, margin: 0}}/></Link></Menu.Item>,
					<Menu.Item key="/bell" style={{float: 'right'}}><Icon type="bell" style={{fontSize: 20, margin: 0}}/></Menu.Item>
				]
			);
		}
		return (
				[
					<Menu.Item key="/login" style={{float: 'right'}}><Link to='/login'>Login</Link></Menu.Item>,
					<Menu.Item key="/signUp" style={{float: 'right'}}><Link to='/signUp'>Sign Up</Link></Menu.Item>
				]
		);
	}
	return(
		<Header>
            <div className="logo"></div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
			  style={{ lineHeight: '64px' }}
			  selectedKeys={[location.pathname]}
            >
              <Menu.Item key="/"><Link to='/'>Home</Link></Menu.Item>
              <Menu.Item key="/contact"><Link to='/contact'>Contact</Link></Menu.Item>
			  <Menu.Item key="/blog"><Link to='/blog'>Blog</Link></Menu.Item>
			  {renderLeft()}
            </Menu>
          </Header>
	)
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	logoutUser: () => dispatch(logoutUser(ownProps.history))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));