import {IHexAccessor, IHexTile} from "./HexDefs";
import {ITile} from "../domain/entities/Tiles";

export class HexDispatcher<T extends ITile = ITile, H extends IHexTile<T> = IHexTile<T>> {

	constructor(
		private readonly accessor: IHexAccessor<T, H>
	) {}

	select( hexagonTile: H): void {
		for ( const hexagon of this.accessor.latest.hexagons ) {
			if ( hexagon.tile.id === hexagonTile.tile.id ) {
				this.accessor.updateTile({ ...hexagon, tile: { ...hexagon.tile, selected: true }});
				continue;
			}
			if ( hexagon.tile.selected ) {
				this.accessor.updateTile({ ...hexagon, tile: { ...hexagon.tile, selected: false }});
			}
		}
	}

	hover( hexagonTile?: H | null): void {
		this.accessor.updateProps({
			hover: hexagonTile ? hexagonTile.tile.id : -1
		});
	}
}