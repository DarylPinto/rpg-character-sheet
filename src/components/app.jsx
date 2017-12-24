import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CharacterSheet from './character-sheet.jsx';

class App extends React.Component{

	render(){
		return(
			<MuiThemeProvider>
				<CharacterSheet />
			</MuiThemeProvider>	
		)
	}

}

export default App;
