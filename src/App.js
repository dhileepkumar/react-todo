import React, { Component } from 'react';
import './App.css';
/* importing modules */
import Header from './Component/Shared/Header/Header';
import Routing from './Component/Shared/Routing/Routing';
class App extends Component {
	
  constructor(props){
	super(props);
	this.state = {
		users:[],
		task:[],
	}
  }
  
  render(){
	return <main>
			<Header />
				<Routing appdetails={this.state}/>
			</main>
  }
}

export default App;
