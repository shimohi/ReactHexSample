import {ITile} from "../entities/Tiles";
import {ITilesUpdater, ITilesListener} from "./TilesUseCases";

export interface ITilesPort<T extends ITile = ITile> {
	getTilesAccessor(): Promise<readonly [ITilesUpdater<T>, ITilesListener<T>]>;
}