import React from 'react';

export default function LoggedOut () {
	return (
		<section className="LoggedOut">
			<form action="">
				<label htmlFor="">
					Username: <br />
					<input type="text" name="userName"/>
				</label>
				<label htmlFor="">
					Password: <br />
					<input type="password" name="" id=""/>
				</label>
				<button className="loginbtn">Log in</button> 
				<button className="createbtn">Create Account</button>
			</form>
		</section>
	)
}