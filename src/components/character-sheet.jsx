import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class CharacterSheet extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			drawerOpen: false
		}
	}

	toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen
		});
	}

	render(){
		return(
			<div id="character-sheet">
				<AppBar title="Character Sheet" onLeftIconButtonClick={this.toggleDrawer} />
				<Drawer open={this.state.drawerOpen} onRequestChange={this.toggleDrawer} docked={false}>
					<AppBar title="Menu" showMenuIconButton={false} />
					<MenuItem>Test 1</MenuItem>
				</Drawer>
			</div>
		)
	}

};

export default CharacterSheet;
