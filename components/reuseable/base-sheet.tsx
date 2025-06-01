import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function BaseSheet({
	children,
	title,
	description,
	trigger,
}: {
	children: React.ReactNode;
	title: string;
	description: string;
	trigger: React.ReactNode;
}) {
	return (
		<Sheet>
			<SheetTrigger className="flex lg:hidden">{trigger}</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="sr-only">{title}</SheetTitle>
					<SheetDescription className="sr-only">{description}</SheetDescription>
				</SheetHeader>

				{children}
			</SheetContent>
		</Sheet>
	);
}
