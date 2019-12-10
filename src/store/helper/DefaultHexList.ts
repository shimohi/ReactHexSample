import {IHex} from "../HexDefs";
import {ITile} from "../../domain/entities/Tiles";

const L = 10;
const T = L * Math.cos(30 * Math.PI / 180 );
const createHexagonArray = ( startX: number, startY: number ) => Array.from({ length:8 }, (_, i) => [ ( startX + i * 2 * T ), startY ] );

export const DefaultHexList: ReadonlyArray<IHex> = [
	...createHexagonArray( 2 * T, L ),
	...createHexagonArray( T, L / 2 + 2 * L ),
	...createHexagonArray( 2 * T, 4 * L ),
	...createHexagonArray( T, L / 2 + 5 * L ),
	...createHexagonArray( 2 * T, 7 * L ),
	...createHexagonArray( T, L / 2 + 8 * L ),
].map( (center) => {
	return { center, sideLength: L } as any;
});

export const DefaultTiles: ReadonlyArray<ITile> = DefaultHexList.map((hexagon, i) => {
	return {
		id: i,
		selected: false,
	}
});