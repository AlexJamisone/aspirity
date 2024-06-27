'use client';
import StaticticStick from '@/components/StaticticStick';
import Text from '@/components/Text';
import { staticticData } from '@/constant/statictic';
import { useStatictic } from '@/store/useStatictic';

export default function Chart() {
	const totalDays = staticticData.reduce(
		(sum, segment) => sum + segment.value,
		0,
	);

	const [setType, type] = useStatictic((state) => [
		state.setType,
		state.type,
	]);

	const getCoordinatesForPercent = (percent: number): [number, number] => {
		const x = 80 + 70 * Math.cos(2 * Math.PI * percent - Math.PI / 2);
		const y = 80 + 70 * Math.sin(2 * Math.PI * percent - Math.PI / 2);
		return [x, y];
	};

	let cumulativePercent = 0;
	const defaultStrokeWidth = 10;
	const hoveredStrokeWidth = 20;

	return (
		<div className="flex flex-col items-center">
			<div className="relative size-fit min-h-fit min-w-fit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="160"
					height="160"
					fill="none"
					viewBox="-10 -10 180 180"
				>
					{staticticData.map((segment, index) => {
						const percent = segment.value / totalDays;
						const [startX, startY] =
							getCoordinatesForPercent(cumulativePercent);
						cumulativePercent += percent;
						const [endX, endY] =
							getCoordinatesForPercent(cumulativePercent);
						const largeArcFlag = percent > 0.5 ? 1 : 0;
						const strokeWidth =
							type === segment.type
								? hoveredStrokeWidth
								: defaultStrokeWidth;
						return (
							<path
								key={index}
								d={`
                                    M ${startX} ${startY}
                                    A 70 70 0 ${largeArcFlag} 1 ${endX} ${endY}
                                    `}
								strokeWidth={strokeWidth.toString()}
								fill="none"
								className={`${type === segment.type ? 'scale-105' : 'scale-100'} origin-center transition-all ${segment.strokeColor}`}
								onMouseEnter={() => setType(segment.type)}
								onMouseLeave={() => setType(null)}
							/>
						);
					})}
				</svg>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<Text className="text-center" as="h4" variant="h4">
						{totalDays}
					</Text>
					<Text as="span" className="text-tertiary-txt">
						дня
					</Text>
				</div>
			</div>
			<div className="flex w-full flex-col gap-2">
				{staticticData.map((segment) => (
					<StaticticStick key={segment.id} segment={segment} />
				))}
			</div>
		</div>
	);
}
