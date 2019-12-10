import React, {useEffect, useState} from 'react';
import './App.css';
import {ITilesPort} from "../domain/usecases/TilesPort";
import {IHexagonAccessorFactory} from "../store/HexAccessorFactory";
import {DefaultHexTilesAccessor} from "../store/helper/DefaultHexTilesAccessor";
import {IHexAccessor, IHexTiles} from "../store/HexDefs";
import {HexTileDispatcherContext, HexTileListenerContext} from './contexts/HexTileContext';
import {HexDispatcher} from '../store/HexDispatcher';
import {Root} from "./layers/Root";

const App: React.FC<{
	tilesPort: ITilesPort,
	hexagonAccessorFactory: IHexagonAccessorFactory
}> = (props) => {
	const [accessor, setAccessor] = useState<IHexAccessor>(new DefaultHexTilesAccessor());
	useEffect(() => {
		const {tilesPort, hexagonAccessorFactory} = props;
		let clean = () => {
		};
		const asyncFunc = async () => {
			const [tilesDispatcher, tilesListener] = await tilesPort.getTilesAccessor();
			const hexagonAccessor = await hexagonAccessorFactory.getHexagonAccessor();
			hexagonAccessor.bind(tilesListener, tilesDispatcher);
			clean = () => {
				hexagonAccessor.unBind();
			};
			setAccessor(hexagonAccessor);
		};
		asyncFunc().catch((e) => {
			console.warn(e);
		});
		return () => {
			clean();
		};
	});
	return (
		<div className="App">
			<HexTileDispatcherContext.Provider value={new HexDispatcher(accessor)}>
				<Container accessor={accessor}/>
			</HexTileDispatcherContext.Provider>
		</div>
	);
};

const Container: React.FC<{ accessor: IHexAccessor }> = (props) => {

	const {accessor} = props;
	const [tiles, setTiles] = useState<IHexTiles>(accessor.latest);
	useEffect(() => {
		const listener = (tiles: IHexTiles) => {
			setTiles(tiles);
		};
		accessor.on(listener);
		setTiles(accessor.latest);
		return () => {
			accessor.remove(listener);
		};
	}, [accessor]);
	return (
		<HexTileListenerContext.Provider value={tiles}>
			<Root />
		</HexTileListenerContext.Provider>
	);
};
export default App;
