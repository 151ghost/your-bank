export default function AnimatedBorderWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={`card-wrapper ${className}`}>{children}</div>;
}
