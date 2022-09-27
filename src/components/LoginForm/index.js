// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', textVal: false, text: ''}

  successAPICall = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitButt = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const {ok} = response
    if (username !== '' && password !== '') {
      if (ok === true) {
        this.successAPICall()
        this.setState({textVal: false})
      } else {
        this.setState({textVal: true})
        this.setState({text: data.error_msg})
      }
    } else if (username === 'rahul' && password === '') {
      this.setState({textVal: true})
      this.setState({text: data.error_msg})
    } else {
      this.setState({textVal: true})
      this.setState({text: data.error_msg})
    }
  }

  userNameValue = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  userPassValue = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {username, password, textVal, text} = this.state
    return (
      <div className="login-bg-container">
        <div className="img-login-top-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img-login-top"
          />
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="img-login"
        />
        <form className="card-1" onSubmit={this.submitButt}>
          <div className="form-cls">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="img-login-1"
            />
          </div>

          <div>
            <label htmlFor="input-1" className="label-login">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              placeholder="Username"
              id="input-1"
              className="input-cont"
              onChange={this.userNameValue}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="input-2" className="label-login">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="input-2"
              className="input-cont"
              onChange={this.userPassValue}
              value={password}
            />
          </div>
          <button type="submit" className="button-login">
            Login
          </button>
          {textVal ? <p className="rc">*{text}</p> : ''}
        </form>
      </div>
    )
  }
}

export default LoginForm
