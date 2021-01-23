import React from 'react';
import {Card} from "antd";


const ListCard = (props) => {
	return (
		<Card  title={props.myTitle} bordered={false} style={{width: "30%", margin: "10px"}}>
			<div>
				<p>{props.item.description}</p>
			</div>
		</Card>
	);
}

export default ListCard;