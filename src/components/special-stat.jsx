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
			total: 0
		}
	}

	handleStatChange = () => {
		let base = this.base.getValue() ? parseInt(this.base.getValue()) : 0;
		let itemBonus = this.itemBonus.getValue() ? parseInt(this.itemBonus.getValue()) : 0;
		let miscBonus = this.miscBonus.getValue() ? parseInt(this.miscBonus.getValue()) : 0;
		this.setState({
			total: base + itemBonus + miscBonus 
		});
	}

	render(){
		return(
			<tr>
				<td><b>{this.props.statAbbr[0]}</b>{omitFirstLetter(this.props.statAbbr)}</td>
				<td className="total">{this.state.total}</td>
				<td><TextField type="number" fullWidth={true} ref={el => this.base = el} onChange={this.handleStatChange} /></td>	
				<td><TextField type="number" fullWidth={true} ref={el => this.itemBonus = el} onChange={this.handleStatChange} /></td>	
				<td><TextField type="number" fullWidth={true} ref={el => this.miscBonus = el} onChange={this.handleStatChange} /></td>	
			</tr>	
		)
	}

};

export default SpecialStat;
