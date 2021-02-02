import React from 'react';

export default function LoggedOut (props) {
	// console.log(props);
	return (
		<section className="LoggedOut">
			<form action="">
				<label htmlFor="userName">
					Username: <br />
					<input type="text" id="userName" name="userName"/>
				</label>
				<label htmlFor="pwkey">
					Password: <br />
					<input type="password" id="pwkey" name="pwkey" />
				</label>
				<button className="loginbtn" onClick={(e) => props.logIn(e)} >Log in</button> 
				<button className="createbtn" onClick={(e) => props.newPlayer(e)}>Create Account</button>
			</form>
		</section>
	)
}