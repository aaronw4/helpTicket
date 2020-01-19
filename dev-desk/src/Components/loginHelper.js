import React from 'react';
import helperImg from '../../src/SVG/askMe.svg';
import axios from 'axios';

class LoginHelper extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        failLogin: false
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

        axios
            .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.data[0].userId);
                localStorage.setItem('name', res.data.data[0].username);
                this.props.history.push('/helper');
            })
            .catch(err => {
                console.log(err.message);
                this.setState({failLogin: true});
            })
    };
    
    render(){
        return(
            <div>
                <h1>Helper Log In Page</h1>
                
                <div className='content'>
                    <div className='image'>
                        <img src={helperImg} alt='Helper' width='50%' height='50%'/>
                    </div>
                </div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='User Name'
                        className='helperLoginInput'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                        className='helperLoginInput'
                    />
                    <button>Log In</button>
                    {this.state.failLogin === true ? <p>Log In Failed</p> : null}
                </form>
            </div>
        );
    };
};

export default LoginHelper