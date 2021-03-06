import React,{Component} from 'react';
import {Link} from 'react-router-dom';
/* render html with class */

class RegisterComponent extends Component{
	constructor(props){	
		super(props)
		console.log(this.props);
	}
	render(){
		return(
			 <div className="container">
				<div className="card card-container">
					<img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
					<p id="profile-name" className="profile-name-card"></p>
					<div className="text-center">
						<h3>{this.props.sitedetails.sitename} : </h3>  <h4>{this.props.sitedetails.pages[1].pagename}</h4>
					</div>
					<form className="form-signin">
						<span id="reauth-email" className="reauth-email"></span>
						<input type="text" className="form-control" placeholder="Name" name="username" required  onChange={this.props.getName} />
						<input type="email" className="form-control" placeholder="Email address" name="useremail" required  onChange={this.props.getEmail} />
						<input type="text" className="form-control" placeholder="Mobile Number" name="userpassword" required onChange = {this.props.getMobilenumber} />
						<input type="password" className="form-control" placeholder="Password" name="userpassword" required  onChange = {this.props.getPassword}/>
						<button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this.props.registerUser}>Sign in</button>
					</form>
					<Link to="/forgetpassword" className="forgot-password">Forgot the password?</Link>
					<Link to="/" className="forgot-password pull-right">Login</Link>
				</div>
			</div>
		)
	}
} 
		
export default RegisterComponent;