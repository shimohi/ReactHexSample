import React, {Context} from "react";
import {IRange} from "../../store/HexDefs";

export const RootAreaBoundsContext: Context<IRange>
	= React.createContext<IRange>({x: 0, y: 0, width: 0, height: 0});
