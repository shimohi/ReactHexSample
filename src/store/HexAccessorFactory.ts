import {IHexAccessor, IHexTile} from "./HexDefs";
import {ITile} from "../domain/entities/Tiles";

export interface IHexagonAccessorFactory<T extends ITile = ITile, H extends IHexTile<T> = IHexTile<T>> {
	getHexagonAccessor(): Promise<IHexAccessor<T, H>>;
}
