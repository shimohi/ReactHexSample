import React from 'react';
import {IRange} from "../../store/HexDefs";
export const SVGLayer: React.FC<{
	viewPort?: IRange | null,
	viewBox: IRange
}> = (props) => {
	const {viewPort, viewBox} = props;
	const port = viewPort || viewBox;
	const {x, y, width, height} = viewBox;
	return (
		<svg x={ port.x} y={port.y} width={port.width} height={port.height} viewBox={`${x} ${y} ${width} ${height}`}>
			{props.children}
		</svg>
	);
};