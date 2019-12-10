import React from 'react';
import {Hex} from "../../shared/Hex";
import {IHexTile} from "../../../store/HexDefs";

export const HexTileView: React.FC<{ hexagonTile: IHexTile }> = (props) => {
	const {center, sideLength, tile} = props.hexagonTile;
	const [x, y] = center;
	return (
		<React.Fragment>
			<Hex
				svgProps={{
					fill: tile.selected ? "green" : "none"
				}}
				hexagonTile={props.hexagonTile}
			/>
			<text
				x={x}
				y={y}
				fill={ tile.selected ? "white" : "slategray"}
				fontSize={sideLength}
				textAnchor="middle"
				dominantBaseline="middle"
				alignmentBaseline="middle"
			>{tile.id + 1}</text>
		</React.Fragment>
	);
};
