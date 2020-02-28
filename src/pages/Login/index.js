import React from 'react';
import Header from '../../components/Header';
import validateEmail from '../../util'
import { Redirect } from 'react-router-dom'
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validCredentials: false,
      loginError: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin() {
    const { email, password } = this.state
    if (!email || !password) {
      return this.setState({
        loginError: 'Both fields are required.'
      })
    }
    if (validateEmail(email)) {
      return this.setState({
        validCredentials: true
      })
    } else {
      return this.setState({
        loginError: 'Please enter a valid email.'
      })
    }
  }

  render() {
    const { email, password, validCredentials, loginError } = this.state
    if (validCredentials === true) {
      return <Redirect to='/homepage' />
    }
    return (
      <div id='login-page'>
        <Header title='Welcome' />
        <div id='login-container' className='center'>
          <h1>Login</h1>
          <br />
          {loginError && <div className='error'>{loginError}</div>}
          <input
            name='email'
            className='login-input'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <br />
          <br />
          <input
            name='password'
            type='password'
            className='login-input'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
          />
          <br />
          <br />
          <button className='square-button' onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;