import {ITile} from "../entities/Tiles";

export interface ITilesUpdater<T extends ITile = ITile> {
	update(tile: T): void;
}

export interface ITilesListener<T extends ITile = ITile> {
	readonly latest: ReadonlyArray<T>;
	on(listener: (tiles: ReadonlyArray<T>) => any ): void;
	remove(listener: (tiles: ReadonlyArray<T>) => any): void;
}
