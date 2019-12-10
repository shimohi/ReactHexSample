import {ITilesPort} from "../../domain/usecases/TilesPort";
import {ITile} from "../../domain/entities/Tiles";
import {ITilesUpdater, ITilesListener} from "../../domain/usecases/TilesUseCases";
import {DefaultTilesAccessor} from "../../domain/usecases/interactors/DefaultTilesAccessor";
import {DefaultTiles} from "../../store/helper/DefaultHexList";

class MockTilesPortImpl implements ITilesPort {
	private readonly accessor: DefaultTilesAccessor = new DefaultTilesAccessor<ITile>(DefaultTiles);
	public async getTilesAccessor(): Promise<readonly [ITilesUpdater<ITile>, ITilesListener<ITile>]> {
		return [this.accessor, this.accessor];
	}
}
export const MockTilesPort: ITilesPort = new MockTilesPortImpl();