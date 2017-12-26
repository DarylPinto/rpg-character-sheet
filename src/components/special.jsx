import React from 'react'
import SpecialStat from './special-stat.jsx';

class Special extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<table id="special">
				<thead>
					<tr>
						<th></th>	
						<th>Total</th>		
						<th>Base</th>		
						<th>Item Bonus</th>		
						<th>Misc Bonus</th>
					</tr>
				</thead>
				<tbody>
					<SpecialStat statName="Strength" statAbbr="STR" />	
					<SpecialStat statName="Perseverance" statAbbr="PER" />	
					<SpecialStat statName="Endurance" statAbbr="END" />	
					<SpecialStat statName="Charisma" statAbbr="CHA" />	
					<SpecialStat statName="Intellect" statAbbr="INT" />	
					<SpecialStat statName="Agility" statAbbr="AGL" />	
					<SpecialStat statName="Luck" statAbbr="LCK" />
				</tbody>
			</table>	
		)
	}

};

export default Special;
