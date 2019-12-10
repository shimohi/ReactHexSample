import React, {useContext} from 'react';
import {Hex} from "../../shared/Hex";
import {IHexTile} from "../../../store/HexDefs";
import {HexTileListenerContext} from "../../contexts/HexTileContext";

export const HexTileOverlay: React.FC<{hexagonTile: IHexTile}> = (props) => {
	const {hexagonTile} = props;
	const tiles = useContext(HexTileListenerContext);
	return (
		<Hex
			svgProps={{
				strokeWidth: hexagonTile.tile.id === tiles.hover ? 0.5 : 0,
				stroke: "gold",
			}}
			hexagonTile={ props.hexagonTile }
		/>
	);
};
