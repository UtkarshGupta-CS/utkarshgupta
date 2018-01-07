import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div
				style={{
					textAlign: 'center',
				}}
				className="heading"
			>
				<img
					src="https://raw.githubusercontent.com/UtkarshGupta-CS/utkarshgupta/master/public/profile_pic.jpg"
					alt="Utkarsh Gupta"
				/>
			</div>
		);
	}
}

export default Header;
