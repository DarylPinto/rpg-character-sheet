import React from 'react'
import TextField from 'material-ui/TextField';

class Identity extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="character-identity">
				<TextField floatingLabelText="Name" onChange={this.props.onCharacterNameChange} />	
				<TextField floatingLabelText="Job" />	
				<TextField floatingLabelText="Level" type="number" />
			</div>	
		)
	}

};

export default Identity;
