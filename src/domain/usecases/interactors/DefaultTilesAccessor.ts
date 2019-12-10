import {ITilesUpdater, ITilesListener} from "../TilesUseCases";
import {ITile} from "../../entities/Tiles";

export class DefaultTilesAccessor<T extends ITile = ITile> implements ITilesUpdater<T>, ITilesListener<T> {

	private listeners: Set<(tiles: ReadonlyArray<T>) => any> = new Set();
	constructor(private tiles: ReadonlyArray<T>) {}

	public get latest(): ReadonlyArray<T> {
		return this.tiles;
	}

	public on(listener: (tiles: ReadonlyArray<T>) => any ): void {
		this.listeners.add(listener);
	}

	public remove(listener:(tiles: ReadonlyArray<T>) => any ): void {
		this.listeners.delete(listener);
	}

	public update(tile: T): void {
		if (this.tiles[tile.id] === tile ) {
			return;
		}
		const tiles = [...this.tiles];
		tiles[tile.id] = tile;
		this.tiles = tiles;
		for (const listener of this.listeners.values()) {
			listener(this.tiles);
		}
	}
}