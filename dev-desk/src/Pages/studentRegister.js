import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class studentRegister extends React.Component {
  state = {
    username: '',
    password: '',
    message:'',
    hitSubmit: false
  } 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }

  register = e => {
    e.preventDefault();                
    this.setState({hitSubmit: true});
    
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

  backToHomePage = e => {
    e.preventDefault();
    window.location='/'
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div>
            <button onClick={this.backToHomePage} className='homeButton'>Home Page</button>
        </div>
        <div>
          <h1 className="header pageTitle">Student Register Page</h1>
          <p className='header'>Select a user name and a password.</p>
          
          <div className="form">
            <div className="form-group">
              <input 
                type="text" 
                name="username" 
                placeholder="User Name"
                value={this.state.username}
                onChange={this.handleChange}
                className='loginInput'
              />         
              <input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className='loginInput'
              />
              <button type="button" onClick={this.register}>
                Register
              </button>
            </div>
          </div>
        </div>
        {this.state.hitSubmit === true ? 
        <Loader
          type="Oval"
          color="white"
          height={50}
          width={50}
          timeout={0}
        />  : null  } 
        <p className='header'>{this.state.message}</p>
      </div>
    );
  }
}

export default studentRegister