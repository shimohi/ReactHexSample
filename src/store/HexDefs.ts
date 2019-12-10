import {ITile} from "../domain/entities/Tiles";
import {ITilesUpdater, ITilesListener} from "../domain/usecases/TilesUseCases";

export interface IHex {
	readonly sideLength: number;
	readonly center:  readonly [number, number];
}

export interface IHexTile<T = ITile> extends IHex {
	readonly tile: T;
	readonly path: string;
}

export interface IRange {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface IHexTilesProps {
	readonly range: Readonly<IRange>;
	readonly hover: number;
}

export interface IHexTiles<H extends IHexTile = IHexTile> extends IHexTilesProps {
	readonly hexagons: ReadonlyArray<H>;
}

export interface IHexUpdater<H extends IHexTile = IHexTile> {
	updateProps(props: Partial<IHexTilesProps>): void;
	updateTile(hexagon?: H | null): void;
}

export interface IHexListener<H extends IHexTile = IHexTile> {
	readonly latest: IHexTiles<H>;
	on(listener: (tiles: IHexTiles<H>) => any ): void;
	remove(listener: (tiles: IHexTiles<H>) => any): void;
}

export interface IHexAccessor<T extends ITile = ITile, H extends IHexTile<T> = IHexTile<T>> extends IHexUpdater<H>, IHexListener<H> {
	bind(
		tilesListener: ITilesListener<T>,
		tilesUpdater: ITilesUpdater<T>
	): void;
	unBind(): void;
}

