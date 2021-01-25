import React from 'react';
import playerStorage from '../../playerData/playerStorage';

export default function KingdomStorage () {
	let masterList = [];
	for(const item in playerStorage){
		// console.log(item + playerStorage[item]);
		masterList.push([item, playerStorage[item]]);
	}
	return (
		<section>
			{masterList.map((item) => {
				return (
					<p key={item[0]}>{item[0]}: {item[1]}</p>
				)
			})}
		</section>
		
	)
}