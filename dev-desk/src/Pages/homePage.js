import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<h1 className='welcome pageTitle'>Development Desk Home Page</h1>
			
			<div className="content">				
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