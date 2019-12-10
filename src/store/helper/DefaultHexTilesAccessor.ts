import {
	IHex,
	IHexAccessor,
	IHexTile,
	IHexTiles, IHexTilesProps
} from "../HexDefs";
import {ITilesUpdater, ITilesListener} from "../../domain/usecases/TilesUseCases";
import {ITile} from "../../domain/entities/Tiles";
import {HexPathCreator} from "../../utils/HexPathCreator";
import {DefaultHexList} from "./DefaultHexList";
import { HexRangeCalculator } from "../../utils/HexRangeCalculator";

export class DefaultHexTilesAccessor implements IHexAccessor {

	private listeners: Set<(tiles: IHexTiles) => any> = new Set();
	private tilesListener: ITilesListener | null = null;
	private tilesDispatcher: ITilesUpdater | null = null;
	private hexagonTiles: IHexTiles;
	private readonly tilesCallback: (tiles: ReadonlyArray<ITile>) => any;
	private readonly hexagons: ReadonlyArray<IHex>;

	constructor(
		hexagons?: ReadonlyArray<IHex> | null
	) {
		this.hexagons = hexagons ? hexagons : [...DefaultHexList];
		this.hexagonTiles = {
			range: HexRangeCalculator.calcRange(this.hexagons),
			hexagons: [],
			hover: -1,
		};
		this.tilesCallback = (tiles) => {
			if (this.hexagonTiles.hexagons.length > 0) {
				this.hexagonTiles = {
					...this.hexagonTiles,
					hexagons: this.hexagonTiles.hexagons.map((hexagon, i) => {
						return {...hexagon, tile: tiles[i]};
				})};
				return;
			}
			this.hexagonTiles = {
				...this.hexagonTiles,
				hexagons: this.hexagons.map((hexagon, i) => {
					return {...hexagon, tile: tiles[i], hover: false, path: HexPathCreator.createPath(hexagon.center, hexagon.sideLength)};
			})};
		}
	}

	public get latest(): IHexTiles {
		return this.hexagonTiles;
	}

	public bind(
		tilesListener: ITilesListener,
		tilesDispatcher: ITilesUpdater
	): void {
		this.unBind();
		this.tilesCallback(tilesListener.latest);
		tilesListener.on(this.tilesCallback);
		this.tilesListener = tilesListener;
		this.tilesDispatcher = tilesDispatcher;
	}

	public unBind(): void {
		this.tilesListener?.remove(this.tilesCallback);
		this.tilesListener = null;
		this.tilesDispatcher = null;
	}

	public on(listener: (hexagonTiles: IHexTiles) => any ): void {
		this.listeners.add(listener);
	}

	public remove(listener:(hexagonTiles: IHexTiles) => any ): void {
		this.listeners.delete(listener);
	}

	public updateProps(props: Partial<IHexTilesProps>): void {
		this.hexagonTiles = {...this.hexagonTiles, ...props };
		this.notice();
	}

	public updateTile(hexagonTile: IHexTile): void {
		if (this.hexagonTiles.hexagons[hexagonTile.tile.id] === hexagonTile ) {
			return;
		}
		const hexagons = [...this.hexagonTiles.hexagons];
		hexagons[hexagonTile.tile.id] = hexagonTile;
		this.hexagonTiles = {
			range: this.hexagonTiles.range,
			hexagons: hexagons,
			hover: -1,
		};
		this.tilesDispatcher?.update(hexagonTile.tile);
		this.notice();
	}

	private notice(): void {
		for (const listener of this.listeners.values()) {
			listener(this.hexagonTiles);
		}
	}
}