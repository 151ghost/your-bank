export default function AnimatedBorderWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative bg-black overflow-hidden before:absolute before:h-[200%] before:w-[200%] before:-left-1/2 before:-top-1/2 content-[''] before:bg-conic before:from-[#CAFF33] before:via-[#CAFF33]/50 before:to-[#CAFF33]/0 before:animate-border-spin ${className}`}
		>
			{children}
		</div>
	);
}
