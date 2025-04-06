import clsx from "clsx";

export function Separator({
	className = "",
	orientation = "horizontal",
}: { className?: string; orientation?: "vertical" | "horizontal" }) {
	return (
		<div
			className={clsx(
				{
					"min-w-[1px] h-[21px] xl:h-[25px]": orientation === "vertical",
					"w-full h-[1px] bg-grey-15": orientation === "horizontal",
				},
				className,
			)}
		/>
	);
}
