const COS_30 = Math.cos(30 * Math.PI / 180);
const DIGITS = 5;
const ROUND_OP = Math.pow(10, DIGITS );

export class HexPathCreator {
	public static createPath(
		center: readonly [number, number],
		sideLength: number
	): string {

		let [x, y] = center;

		// SVGは指数表記が使えないので、小数点を丸める
		const halfWidth = Math.round( sideLength * COS_30 * ROUND_OP ) / ROUND_OP;
		x = Math.round( x * ROUND_OP ) / ROUND_OP;
		y = Math.round( y * ROUND_OP ) / ROUND_OP;
		sideLength = Math.round(sideLength * ROUND_OP) / ROUND_OP;
		const halfSide =  sideLength / 2;

		return `M${x},${y - sideLength} l${halfWidth},${halfSide} v${sideLength} l${-halfWidth},${halfSide} l${-halfWidth},${-halfSide} v${-sideLength} l${halfWidth},${-halfSide}z`;
	}
}