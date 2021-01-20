import React from 'react';

import NavHeader from '../NavHeader/NavHeader';
import NavList from '../NavList/NavList';

import './MainNav.min.css';

export default class MainNav extends React.Component {
	state = {
		isNavOpen : true,
	}

	toggleNav = () => {
		if(this.state.isNavOpen) {
			this.setState({
				isNavOpen : false,
			})
		} else {
			this.setState({
				isNavOpen : true,
			})
		}
	}

	render () {
		return (
			<nav className={this.state.isNavOpen ? 'MainNav': 'MainNav hidden'}>
				<button className="openNav" onClick={this.toggleNav} aria-label="open mobile menu" >Menu</button>
				<button className="closeNav" onClick={this.toggleNav} aria-label="close mobile menu" >&#10005;</button>
				<NavHeader />
				<NavList />
			</nav>
		)
	}
}