import React from 'react'
import TextField from 'material-ui/TextField';

function omitFirstLetter(str){
	let arr = str.split('');
	arr.shift();
	return arr.join('');
}

class SpecialStat extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			base: 0,
			itemBonus: 0,
			miscBonus: 0,
			total: 0
		}
	}

	handleStatChange = e => {
		
	}	

	render(){
		return(
			<tr>
				<td><b>{this.props.statAbbr[0]}</b>{omitFirstLetter(this.props.statAbbr)}</td>
				<td className="total">{this.state.total}</td>
				<td><TextField type="number" fullWidth={true} value={this.state.base} onChange={this.handleStatChange} /></td>
				<td><TextField type="number" fullWidth={true} value={this.state.itemBonus} onChange={this.handleStatChange} /></td>
				<td><TextField type="number" fullWidth={true} value={this.state.miscBonus} onChange={this.handleStatChange} /></td>
			</tr>	
		)
	}

};

export default SpecialStat;
