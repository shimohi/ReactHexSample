import React, {useEffect, useState, useRef, useContext} from 'react';
import { RootAreaBoundsContext } from '../contexts/RootAreaBoundsContext';
import {HexTilesOverlay} from "./overlays/HexTilesOverlay";
import {HexTilesView} from "./views/HexTilesView";
import {HexTilesTouchEventListener} from "./touches/HexTilesTouchEventListener";
import {SVGLayer} from "../shared/SVGLayer";
import {HexTileListenerContext} from "../contexts/HexTileContext";

export const Root: React.FC = () => {

	const {range} = useContext(HexTileListenerContext);
	const [rootRange, setSize] = useState({ x:0, y:0, width:0, height:0 });
	const elementRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let mounted = true;
		let reserved = false;
		const updateSize = () => {
			if ( !mounted || !elementRef.current) {
				return;
			}
			const rect = elementRef.current.getBoundingClientRect();
			setSize({
				x: 0,
				y: 0,
				width: rect.width,
				height: rect.height
			});
		};
		const onResize = () => {
			if (reserved) { return;}
			reserved = true;
			setTimeout(() => {
				updateSize();
				reserved = false;
			}, 100);
		};
		window.addEventListener('resize', onResize);
		updateSize();
		return () => {
			mounted = false;
			window.removeEventListener('resize', onResize);
		}
	}, []);
	return (
		<RootAreaBoundsContext.Provider value={rootRange}>
			<div ref={elementRef} style={{
				position: "absolute",
				top: "0px",
				left: "0px",
				width: "100%",
				height: "100%",
			}}>
				<div style={{
					position: "relative",
					width: "100%",
					height: "100%",
				}}>
					<SVGLayer viewPort={rootRange} viewBox={range}>
						<HexTilesView />
						<HexTilesOverlay />
						<HexTilesTouchEventListener />
					</SVGLayer>
				</div>
			</div>
		</RootAreaBoundsContext.Provider>
	);
};