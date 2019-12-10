import React, {useContext} from 'react';
import { HexTileListenerContext } from '../../contexts/HexTileContext';
import {SVGLayer} from "../../shared/SVGLayer";
import {HexTileTouchEventListener} from "./HexTileTouchEventListener";

export const HexTilesTouchEventListener: React.FC = () => {
	const {hexagons, range} = useContext(HexTileListenerContext);
	const items = hexagons.map((hexagon) => {
		return (<HexTileTouchEventListener
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