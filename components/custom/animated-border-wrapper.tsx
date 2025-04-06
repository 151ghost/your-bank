export default function AnimatedBorderWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`relative bg-black overflow-hidden ${className}`}>
			<div className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2 inset-0 [background:conic-gradient(from_0deg_at_50%_50%,#CAFF33_0%,rgba(202,255,51,0.5)_50%,rgba(202,255,51,0)_100%)] animate-border-spin" />
			<div className="relative z-10 w-full h-full ">{children}</div>
		</div>
	);
}
