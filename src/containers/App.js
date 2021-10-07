import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots.jsx';
import './App.css';



class App extends Component {
	// creating a state to keep looking for any updates on the searchfield
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// this component checks for any update in the window
	componentDidMount() {
		// gets the json from a API post request... we then map these users to robots in the state. 
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}
	
	onSearchChange = (event) => {
		// every time this event is fired, searchfield is updated
		this.setState({ searchfield: event.target.value });
		// console.log(filterRobots);
	}


	render(){
		const {robots, searchfield} = this.state;
		// takes in values from the search field/ searchbox and filters the list of robots that includes the searchfield in their names.
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// if there are no entries in robots then return the loading sign
		if (!robots.length) {
			return (
				<h1 className="tc f1">Loading</h1>
			)
		}
		else{
			return (
				<React.StrictMode>
					<div className="tc">
						<h1 className="f1">Droid Network</h1>
						{/* the onSearchChange method is passed as 'searchChange' so the searchbox can call that method */}
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filterRobots}/>
						</Scroll>
					</div>
				</React.StrictMode>
			);
		}
 	}	 
}

export default App;
// This was starter content

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   } 
// }

