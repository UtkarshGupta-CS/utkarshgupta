import React, { Component } from 'react';

export default class Footer extends Component {
	state = {
		socialLinks: [
			{
				icon: 'fa fa-github fa-2x',
				link: 'https://github.com/UtkarshGupta-CS/',
			},
			{
				icon: 'fa fa-twitter fa-2x',
				link: 'https://twitter.com/utkarshgupta97',
			},
			{
				icon: 'fa fa-medium fa-2x',
				link: 'https://medium.com/@utkgupta',
			},
			{
				icon: 'fa fa-linkedin-square fa-2x',
				link: 'https://www.linkedin.com/in/utkarshgupta97',
			},
			{
				icon: 'fa fa-angellist fa-2x',
				link: 'https://angel.co/utkarshgupta97',
			},
		],
	};

	showIcons = () => {
		const { socialLinks } = this.state;

		return socialLinks.map((name, index) => {
			return (
				<a key={index} href={name.link} target="_blank" rel="noopener noreferrer">
					<i className={name.icon} />
				</a>
			);
		});
	};

	displayMessage = () => (
		<div>
			<div className="content">
				<h2>
					Don't be a stranger
					<span role="img" aria-label="smile">
						😃
					</span>
				</h2>
			</div>
			<p className="icons">{this.showIcons()}</p>
		</div>
	);

	render() {
		return this.displayMessage();
	}
}
