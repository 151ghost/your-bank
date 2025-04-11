import { motion, type MotionStyle, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

export const BorderBeam = ({
	className,
	size = 50,
	delay = 0,
	duration = 10,
	colorFrom = "#CAFF33",
	colorTo = "#CAFF33/50",
	transition,
	style,
	reverse = false,
	initialOffset = 0,
}: BorderBeamProps) => {
	return (
		<div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
			<motion.div
				className={cn(
					"absolute aspect-square",
					"bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
					className,
				)}
				style={
					{
						width: size,
						offsetPath: `rect(0 auto auto 0 round ${size}px)`,
						"--color-from": colorFrom,
						"--color-to": colorTo,
						...style,
					} as MotionStyle
				}
				initial={{ offsetDistance: `${initialOffset}%` }}
				animate={{
					offsetDistance: reverse
						? [`${100 - initialOffset}%`, `${-initialOffset}%`]
						: [`${initialOffset}%`, `${100 + initialOffset}%`],
				}}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
					duration,
					delay: -delay,
					...transition,
				}}
			/>
		</div>
	);
};

interface BorderBeamProps {
	/**
	 * The size of the border beam.
	 */
	size?: number;
	/**
	 * The duration of the border beam.
	 */
	duration?: number;
	/**
	 * The delay of the border beam.
	 */
	delay?: number;
	/**
	 * The color of the border beam from.
	 */
	colorFrom?: string;
	/**
	 * The color of the border beam to.
	 */
	colorTo?: string;
	/**
	 * The motion transition of the border beam.
	 */
	transition?: Transition;
	/**
	 * The class name of the border beam.
	 */
	className?: string;
	/**
	 * The style of the border beam.
	 */
	style?: React.CSSProperties;
	/**
	 * Whether to reverse the animation direction.
	 */
	reverse?: boolean;
	/**
	 * The initial offset position (0-100).
	 */
	initialOffset?: number;
}

// export  function AnimatedBorderWrapper({
// 	children,
// 	className,
// }: {
// 	children: React.ReactNode;
// 	className?: string;
// }) {
// 	return (
// 		<div className={`relative bg-black overflow-hidden ${className}`}>
// 			<div className="absolute w-[200%] h-[200%] 2xl:w-[150%] 2xl:h-[150%] -left-1/2 -top-1/2 inset-0 [background:conic-gradient(from_0deg_at_50%_50%,#CAFF33_0%,rgba(202,255,51,0.5)_50%,rgba(202,255,51,0)_100%)] animate-border-spin" />
// 			<div className="relative z-10 w-full h-full ">{children}</div>
// 		</div>
// 	);
// }
