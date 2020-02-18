import React from 'react';
import { Row, Button, Card, Icon} from 'antd';
import { Form, Input } from 'formik-antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetPassword } from '../../../actions/auth';

class NormalResetPassword extends React.Component {

	render() {
		console.log(this.props.match.params.token)
		return (
			<Row type="flex" justify="center" align="middle" style={{margin: '5em'}}>
				<Card title ='Please enter your new password' >
				<Form>
					<Form.Item  name='password'>
						<Input
						name='password'
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
						/>
					</Form.Item>
					<Form.Item  name='confirmPassword' required>
						<Input
						name='confirmPassword'
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Re-type password"
						/>
					</Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Reset Password
					</Button>
				</Form>
				</Card>
			</Row>
		)
	}
}

const ResetPassword = withFormik({
	mapPropsToValues() {
	  return({
		password: '',
		confirmPassword: '',
	  })
	},
	handleSubmit(values, {props, resetForm}) {	
	  props.resetPassword(values.password,props.match.params.token,props.history)
	  resetForm()
	},
	validationSchema: Yup.object().shape({
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	  password: Yup.string().required()
	})
  })(NormalResetPassword)

const mapDispatchToProps = (dispatch) => ({
	resetPassword: (password, token, history) => dispatch(resetPassword(password, token, history))
})

export default withRouter(connect(null, mapDispatchToProps)(ResetPassword));
