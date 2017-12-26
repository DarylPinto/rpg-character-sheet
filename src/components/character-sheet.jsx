import React from 'react';
import Identity from './identity.jsx';
import Special from './special.jsx';

class CharacterSheet extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			cardTitle: 'Character Sheet'	
		}
	}

	handleCharacterNameChange = e => {
		let name = e.target.value;
		if(name.trim().length === 0) name = "Character Sheet";
		this.setState({cardTitle: name});
	}

	render(){
		return(
			<main>	
				<h1>{this.state.cardTitle}</h1>
				<Identity onCharacterNameChange={this.handleCharacterNameChange} />
				<Special />
			</main>
		)
	}

};

export default CharacterSheet;
