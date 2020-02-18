import React from 'react';
import { Form, Input } from 'formik-antd'

import { Icon, Button, Row, Col } from 'antd';
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createUser } from '../../../actions/auth';


const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

class NormalSignUpForm extends React.Component {
  render() {
    return (
        <Row type="flex" justify="center" align="middle">
			<Col span={10} offset={2}>
			<Form {...formItemLayout} style={{margin: "10%"}}>
			<Form.Item  name='firstName' label='First name' required>
					<Input
					name='firstName'
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder="first name"
					/>
				</Form.Item>
				<Form.Item  name='lastName' label='Last name' required>
					<Input
					name='lastName'
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder="last name"
					/>
				</Form.Item>
				<Form.Item name='email' label='Email' required>
					<Input
					name='email'
					prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder="email"
					/>
				</Form.Item>
				<Form.Item  name='password' label='Password' required>
					<Input
					name='password'
					prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="password"
					placeholder="Password"
					/>
				</Form.Item>
				<Form.Item  name='confirmPassword' label='Re-type password' required>
					<Input
					name='confirmPassword'
					prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="password"
					placeholder="Re-type password"
					/>
				</Form.Item>
				<Form.Item name="button" label=" " colon={false} wrapperCol={{ xs: {span: 16, push: 0}}}>
					<Button name="button" type="primary" htmlType="submit" className="login-form-button">
						Sign Up
					</Button>
				</Form.Item>
			</Form>
			</Col>
			<Col span={10}>
			<h1 style={{ fontSize: 40, fontFamily: 'montserrat', fontWeight: 900}}>Hello Friends</h1>
			<h2 style={{ alignSelf: "center", fontSize: 25, fontFamily: 'montserrat',}}>Thank You For Joining Us!</h2>
			</Col>
          </Row>
    );
  }
}

const SignUp = withFormik({
  mapPropsToValues() {
    return({
		firstName: '',
		lastName: '',
		confirmPassword: '',
		email: '',
		password: ''
    })
  },
  handleSubmit(values, {props,resetForm}) {
	props.createUser(values.email, values.password, values.firstName, values.lastName);
	resetForm();
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required(),
	password: Yup.string().required(),
	firstName: Yup.string().required(),
	lastName: Yup.string().required(),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
})(NormalSignUpForm)

const mapDispatchToProps = (dispatch) => ({
	createUser: (email, password, firstName, lastName) => dispatch(createUser(email, password, firstName, lastName))
})


export default withRouter(connect(null, mapDispatchToProps)(SignUp));
