import React from "react";
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class studentLogin extends React.Component {
  
  state = {
    credentials: {
        username: '',
        password: ''
    },
    failLogin: false,
    hitSubmit: false
  };

  handleChange = e => {
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
      })
  };

  login = e => {
      e.preventDefault();                
      this.setState({hitSubmit: true});

      axios
          .post('https://arw-help-ticket-backend.herokuapp.com/api/user/login', this.state.credentials)
          .then(res => {
              console.log(res);
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('id', res.data.data[0].userId);
              localStorage.setItem('name', res.data.data[0].username);
              this.props.history.push('/studentDashboard');
          })
          .catch(err => {
              console.log(err.message);
              this.setState({failLogin: true});
          })
  };

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
        <h1 className="loginHeader pageTitle">Student Log In Page</h1>
        
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <input 
                type="text" 
                name="username" 
                placeholder="User Name"
                value={this.state.credentials.username} 
                onChange={this.handleChange} 
                className='loginInput'
              />            
              <input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={this.state.credentials.password} 
                onChange={this.handleChange}
                className='loginInput' 
              />
              <button onClick={this.login} >
                Log In
              </button>
            </div>
          </div>
        </div>  
        {this.state.hitSubmit === true ? 
        <Oval
          color="white"
          height={50}
          width={50}
          timeout={0}
          className='loader'
        />  : null  }  
      </div>
    );
  }
}

export default studentLogin