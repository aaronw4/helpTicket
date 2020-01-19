import React from 'react';
import {Link} from 'react-router-dom';
import welcomeImg from '../../src/SVG/homePage.svg';

function HomePage() {
	return (
		<div>
			<h1>Development Desk Home Page</h1>
			
			<div className="content">
				<div className="image">
					<img src={welcomeImg} alt="Welcome to Our Page"/>
				</div>
				
				<Link to='/studentRegister'>
					<button>Register</button>
				</Link>
				
				<Link to='/studentLogin'>
					<button>Student</button>
				</Link>
				
				<Link to='/loginHelper'>
					<button>Helper</button>
				</Link>
			</div>
		</div>
	)
}

export default HomePage;