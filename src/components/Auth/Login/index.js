import React from 'react';
import { Form, Input } from 'formik-antd'
import { connect } from 'react-redux'
import { Col, Icon, Button, Row } from 'antd';
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { withRouter, Redirect } from 'react-router-dom';

import { login, sendResetPasswordEmail } from '../../../actions/auth';
import { toast } from 'react-toastify'


class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isForgotPassword: true,
      forgetEmail: ''
    }
  }

  handleForgetPassword = () => {
    const { forgetEmail } = this.state;
    if(!forgetEmail) {
      toast.error('please enter an valid email')
    }
    this.setState({forgetEmail: ''});
    this.props.resetPassword(forgetEmail)
  }
  
  handelChange = (event) => {
    this.setState({forgetEmail: event.target.value})
  }
  toggleForget = () => {
    this.setState((prevState) => {
      return {
        isForgotPassword: !prevState.isForgotPassword
      }
    })
  }

  renderRightPanel = () => {
    const {isForgotPassword} = this.state;
    if(!isForgotPassword) {
      return([
        <h1 style={{fontWeight: 800, textAlign: 'center'}}> Where Should We Live In Team Welcomes </h1>,
        <h1 style={{fontSize: 60, textAlign: 'center'}}>YOU</h1>
      ])
    }
    return (
      <div style={{ textAlign: "center", margin: "4em"}}>
         <Form.Item name='forgetPassword'>
          <Input
            name='forgetPassword'
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={this.handelChange}
            placeholder="Email"
            value={this.state.forgetEmail}
          />
        </Form.Item>
        <Button type="primary" onClick={this.handleForgetPassword}>Send Reset Link</Button>
        </div>
    );
  }


  render() {
    if(this.props.isAuthenticated){
      return <Redirect to="/" />
    }
    return(
      <div className='container' style={{width: '100%'}}>
      <div className='columns is-centered'>
        <div className='column'>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
        </div>
        <div className='column'>
          <p>dasda</p>
        </div>
      </div>
      </div>
    );
    
    // return (
    //     <Row type="flex" justify="center" align="middle" style={{margin: '5em'}}>
    //       <Col xs ={{span:8, offset: 1}}>
    //       <h1 style={{textAlign: 'center', fontFamily: 'montserrat'}}>Please Enter Your Credentials</h1>
    //       <Form>
    //         <Form.Item name='email'>
    //             <Input
    //               name='email'
    //               prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
    //               placeholder="Email"
    //             />
    //         </Form.Item>
    //         <Form.Item  name='password'>
    //             <Input
    //               name='password'
    //               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
    //               type="password"
    //               placeholder="Password"
    //             />
    //         </Form.Item>
    //           <Button type="primary" htmlType="submit" className="login-form-button">
    //             Log in
    //           </Button>
    //           <a className="login-form-forgot" onClick={this.toggleForget}>
    //             Forgot password
    //           </a>
    //       </Form>
    //       </Col>
    //       <Col xs ={12} >
    //        {this.renderRightPanel()}
    //       </Col>
    //       </Row>
    // );
  }
}

const LoginForm = withFormik({
  mapPropsToValues() {
    return({
      email: '',
      password: '',
      forgetPassword: ''
    })
  },
  handleSubmit(values, {props, resetForm}) {
    props.login(values.email, values.password, props.history)
    resetForm()
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required(),
    password: Yup.string().required()
  })
})(NormalLoginForm)


const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (email, password, history) => dispatch(login(email, password, history)),
    resetPassword: (email) => dispatch(sendResetPasswordEmail(email))
  })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
;
