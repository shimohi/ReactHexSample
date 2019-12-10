import {IHexagonAccessorFactory} from "../../store/HexAccessorFactory";
import {IHexAccessor} from "../../store/HexDefs";
import {DefaultHexTilesAccessor} from "../../store/helper/DefaultHexTilesAccessor";

class MockHexagonAccessorFactoryImpl implements IHexagonAccessorFactory {
	private hexagonAccessor: DefaultHexTilesAccessor = new DefaultHexTilesAccessor();
	public async getHexagonAccessor(): Promise<IHexAccessor> {
		return this.hexagonAccessor;
	}
}
export const MockHexAccessorFactory: IHexagonAccessorFactory = new MockHexagonAccessorFactoryImpl();