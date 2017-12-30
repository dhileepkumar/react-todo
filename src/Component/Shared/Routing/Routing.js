import React,{Component} from 'react';
import {BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';

/* Importing Modules */
import LoginComponent from '../Froms/Login/LoginComponent'; 
import RegisterComponent from '../Froms/Register/RegisterComponent';
import ForgetPasswordComponent from   '../Froms/ForgetPassword/ForgetPasswordComponent'; 

/* siteconfiguration */
const sitedetails = {
	sitename : 'User Listing',
	pages:[
		{pagename:'Login User'},
		{pagename:'Register User'},
		{pagename:'Forget Password'},
	]
	
}

/* Using Class to render Component */
class Routes extends Component{
	constructor(props){
		super(props);
		console.log(props)
	}
	render(){
		return <HashRouter> 
						<div className="roter_links">
							<Route exact 
								path="/"  
								render ={(props)=>{return <LoginComponent 
								sitedetails={sitedetails} 
								userdetail={this.props.appdetails.users}/>}}
							/>
							<Route 
								path="/register" 
								render = {(props)=>{return <RegisterComponent sitedetails={sitedetails}/> }}
							/>
							<Route 
								path="/forgetpassword" 
								render = {(props)=>{ return <ForgetPasswordComponent sitedetails={sitedetails}/> }}
							/>
						</div>
			   </HashRouter>
	}
}

export default Routes;