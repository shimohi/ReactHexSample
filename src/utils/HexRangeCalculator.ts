import {IHex, IRange} from "../store/HexDefs";

export class HexRangeCalculator {
	public static calcRange(
		hexagons: ReadonlyArray<IHex>
	): IRange {
		const [minX, maxX, minY, maxY] = hexagons.reduce((
			res,
			val
		) => {

			const [nX, xX, nY, xY] = res;
			const [cX, cY] = val.center;
			const l = val.sideLength * 2;
			const t = l * Math.cos(30 * Math.PI / 180 ) * 2;
			return [
				nX > cX - t ? cX - t : nX,
				xX < cX + t ? cX + t : xX,
				nY > cY - l ? cY - l : nY,
				xY < cY + l ? cY + l : xY,
			];
		}, [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]);
		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}
}