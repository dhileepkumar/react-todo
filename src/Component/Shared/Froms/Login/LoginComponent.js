import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class LoginComponent extends Component{
	render(){
		return(
		
			 <div className="container">
				<div className="card card-container">
					<div className="text-center">
						<h3>{this.props.sitedetails.sitename} : </h3>  <h4>{this.props.sitedetails.pages[0].pagename}</h4>
						
					</div>
					<img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
					<p id="profile-name" className="profile-name-card"></p>
					<form className="form-signin">
						<span id="reauth-email" className="reauth-email"></span>
						<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
						<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
						<div id="remember" className="checkbox">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
					</form>
					<Link to="/forgetpassword" className="forgot-password">Forgot the password?</Link>
					<Link to="/register" className="forgot-password pull-right">Register</Link>
				</div>
			</div>
		)
	}
}

export default LoginComponent;
