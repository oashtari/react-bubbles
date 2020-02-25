import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/login`, this.state.credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/colors');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('invalid login: ', err)
      })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            placeholder='enter username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='enter password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    )
  }
};

export default Login;