import React, {useContext} from 'react';
import { HexTileListenerContext } from '../../contexts/HexTileContext';
import {SVGLayer} from "../../shared/SVGLayer";
import {HexTileOverlay} from "./HexTileOverlay";

export const HexTilesOverlay: React.FC = () => {
	const {hexagons, range} = useContext(HexTileListenerContext);
	const items = hexagons.map((hexagon) => {
		return (<HexTileOverlay
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