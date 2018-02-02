// Code React
import React from 'react';
import Citation from './Citation';
import citations from '../citations';

class App extends React.Component{

	state = {};
	
	componentWillMount(){
		this.genererCitation();
	}

	genererCitation = event => {
		//On transforme les citations en array
		const keyArray = Object.keys(citations);
		//Une citation au hasard
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
		if (this.state.citation === citations[randomKey].citation) {
			this.genererCitation();
			return;
		}
		this.setState(citations[randomKey]);
	};

	render(){
		return( //tout doit être mis dans une seule div
			<div>
				<Citation details={this.state} />
				<button onClick = {e => this.genererCitation(e)} >Une autre citation!</button>
			</div>
		)
	}
}


export default App;