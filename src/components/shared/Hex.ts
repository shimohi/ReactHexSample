import * as React from "react";
import {IHexTile} from "../../store/HexDefs";

export interface IHexProps {
	readonly hexagonTile: IHexTile,
	readonly svgProps?: React.SVGProps<SVGPathElement>,
}
export const Hex: React.FC<IHexProps> = (props ) => {
	const {hexagonTile, svgProps} = props;
	return React.createElement(
		"path",
		{...{ fill: "transparent", ...svgProps,  d: hexagonTile.path }},
		props.children
	);
};