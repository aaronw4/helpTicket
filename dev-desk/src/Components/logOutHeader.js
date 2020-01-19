import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    float: right;
    margin-right: 8%;
    margin-top: 10px;
    padding: 10px;
`

function LogOutHeader() {

    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location='/'
    }

    return(
        <div>
            <Button onClick={logOut}>Log Out</Button>
        </div>
    )
}

export default LogOutHeader;