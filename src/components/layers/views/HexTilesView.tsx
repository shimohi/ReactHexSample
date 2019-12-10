import React, {useContext} from 'react';
import {HexTileListenerContext} from '../../contexts/HexTileContext';
import {SVGLayer} from "../../shared/SVGLayer";
import {HexTileView} from "./HexTileView";

export const HexTilesView: React.FC = () => {
	const {hexagons, range} = useContext(HexTileListenerContext);
	const items = hexagons.map((hexagon) => {
		return (<HexTileView
			key={hexagon.tile.id}
			hexagonTile={hexagon}
		/>);
	});
	return (
		<SVGLayer viewBox={range}>
			{items}
		</SVGLayer>
	);
};