import React from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../../actions/auth';

class NormalSignUpForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-half">
						<div className="card">
							<header class="card-header">
								<h1 class="card-header-title is-size-2">
									Sign Up
								</h1>
							</header>
							<div className="card-content">

								<div className="content">
									<Form>
										<div class="field">
											<label class="label">First Name</label>
											<div class="control">
												<Field class="input" name="firstName" type="text" placeholder="First Name" />
											</div>
										</div>
										<div class="field">
											<label class="label">Last Name</label>
											<div class="control">
												<Field class="input" name="lastName" type="text" placeholder="Last Name" />
											</div>
										</div>
										<div class="field">
											<label class="label">Email</label>
											<div class="control">
												<Field class="input" name="email" type="text" placeholder="Email" />
											</div>
										</div>
										<div class="field">
											<label class="label">Password</label>
											<div class="control">
												<Field class="input" name="password" type="text" placeholder="Password" />
											</div>
										</div>
										<div class="field">
											<label class="label">Confirm Password</label>
											<div class="control">
												<Field class="input" name="confirmPassword" type="text" placeholder="Re-type Password" />
											</div>
										</div>
										<div class="field">
											<div class="control is-centered">
												<button class="button is-success is-centered" type="submit">
													Submit
												</button>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const SignUp = withFormik({
	mapPropsToValues() {
		return ({
			firstName: '',
			lastName: '',
			confirmPassword: '',
			email: '',
			password: ''
		})
	},
	handleSubmit(values, { props, resetForm }) {
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
