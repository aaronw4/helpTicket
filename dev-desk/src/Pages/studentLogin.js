import React from "react";
import loginImg from "../../src/SVG/signIn.svg";
import axios from 'axios' //added import

class studentLogin extends React.Component {
  //added state
  state = {
    credentials: {
        username: '',
        password: ''
    },
    failLogin: false
};
//added handleChange
handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
};
//added login
login = e => {
    e.preventDefault();

    axios
        .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/login', this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('id', res.data.data[0].id);
            localStorage.setItem('name', res.data.data[0].username);
            this.props.history.push('/studentDashboard');
        })
        .catch(err => {
            console.log(err.message);
            this.setState({failLogin: true});
        })
};
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Student Login</div>
        
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Student Login"/>
          </div>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={this.state.credentials.username} //added
                onChange={this.handleChange} //added
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" //changed from text to password
                name="password" 
                placeholder="password"
                value={this.state.credentials.password} //added
                onChange={this.handleChange} //added
              />
            </div>
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn" onClick={this.login} >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default studentLogin