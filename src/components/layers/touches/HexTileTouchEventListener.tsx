import React, {useContext} from 'react';
import {Hex} from "../../shared/Hex";
import {IHexTile} from "../../../store/HexDefs";
import {HexTileDispatcherContext} from "../../contexts/HexTileContext";

export const HexTileTouchEventListener: React.FC<{ hexagonTile: IHexTile }> = (props) => {
	const {hexagonTile} = props;
	const dispatcher = useContext(HexTileDispatcherContext);
	const handleClick = () => {
		dispatcher.select(hexagonTile);
	};
	const handleHOver = () => {
		dispatcher.hover(hexagonTile);
	};
	return (
		<g onClick={handleClick} onMouseMove={handleHOver}>
			<Hex
				hexagonTile={props.hexagonTile}
			/>
		</g >
	);
};
