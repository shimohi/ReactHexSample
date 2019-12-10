import React, {Context} from "react";
import {DefaultHexTilesAccessor} from "../../store/helper/DefaultHexTilesAccessor";
import {IHexTiles} from "../../store/HexDefs";
import {HexDispatcher} from "../../store/HexDispatcher";

export const HexTileDispatcherContext: Context<HexDispatcher>
	= React.createContext<HexDispatcher>(new  HexDispatcher(new DefaultHexTilesAccessor([])));

export const HexTileListenerContext: Context<IHexTiles>
	= React.createContext<IHexTiles>({ range: {x:0, y:0, width:0, height: 0}, hexagons: [], hover: -1});
