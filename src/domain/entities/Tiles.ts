export interface ITiles<T extends ITile = ITile> {
	readonly tiles: ReadonlyArray<T>;
}
export interface ITile {
	readonly id: number;
	readonly selected: boolean;
}
