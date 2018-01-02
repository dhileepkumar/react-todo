import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
/* importing modules */
import Header from './Component/Shared/Header/Header';
import Routing from './Component/Shared/Routing/Routing';
class App extends Component {
	
  constructor(props){
	super(props);
	this.handlenamechange = this.handlenamechange.bind(this);
	this.handleemailchange = this.handleemailchange.bind(this);
	this.handlemodelchange = this.handlemodelchange.bind(this);
	this.handleusermobilenumberchange = this.handleusermobilenumberchange.bind(this);
	this.handleuserpasswordchange = this.handleuserpasswordchange.bind(this);
	this.handleuserregister = this.handleuserregister.bind(this);
	this.state = {
			modelStatus:false,
			username:'',
			useremail:'',
			usermobilenumber:'',
			userpassword:'',
			userrole:'',
			task:[]
		
	}
  }
  
  handleuserregister(e){
	  e.preventDefault();
	 console.log(this.state)
	
	//console.log(_get_user_details);
	 
  }
  
  handlenamechange(e){
	  this.setState({username:e.target.value});
  }
  
  handleemailchange(e){
	  this.setState({useremail: e.target.value});
  }
  
  handleusermobilenumberchange(e){
	  this.setState({usermobilenumber: e.target.value});
  }
  
  handlemodelchange(e){
	  this.setState({modelStatus:(e.target.value)?true:false});
  }
  
  handleuserpasswordchange(e){
	  this.setState({userpassword:e.target.value});
  }
  
  handletaskholder(e){
	  this.setState({taskholder:e.target.value});
  }
  
  handletaskname(e){
	  this.setState({taskname:e.target.value});
  }
  
  handletaskdescription(e){
	  this.setState({taskdescription:e.target.value});
  }
  
  handletaskstatus(e){
	  this.setState({taskstatus:e.target.value});
  }
  
  
  
  render(){
	return <main>
			<Header />
			<Routing 
				appdetails={this.state}
				getName = {this.handlenamechange}
				getEmail = {this.handleemailchange}
				getPassword = {this.handleuserpasswordchange}
				registerUser = {this.handleuserregister}
				getMobilenumber = {this.handleusermobilenumberchange}
				/>
			</main>
  }
}

export default App;
