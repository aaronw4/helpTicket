import React from 'react';
import axios from 'axios';
import registerImg from '../../src/SVG/register.svg';

export class studentRegister extends React.Component {
  state = {
    username: '',
    password: '',
    message:''
  } 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }

  register = e => {
    e.preventDefault();
    
    axios
      .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/register', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.setState({message: 'Thank you for registering!'});
        setTimeout(() => {window.location='/studentLogin'}, 2000);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Student Register</div>
        
        <div className="content">
          <div className="image">
            <img src={registerImg} alt="Please Register"/>
          </div>
        </div>
        
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input 
              type="text" 
              name="username" 
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
                    
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn" onClick={this.register}>
            Register
          </button>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default studentRegister