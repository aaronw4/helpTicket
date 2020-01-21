import React from 'react';
import LogOutHeader from '../Components/logOutHeader'

class student extends React.Component {
    userID = localStorage.getItem('id');
    username = localStorage.getItem('name');

    render(){
        return(
            <div className='studentComponent'>
                <LogOutHeader/>
                <div>
                    <h1 className='helperWelcome'>Welcome {this.username} to the Student Help Page!</h1>
                </div>
            </div>
        )
    }
}

export default student