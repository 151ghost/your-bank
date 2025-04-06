export const fadeInUpVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

// Animation variants for desktop slide-in effects
export const slideInVariants = {
	hidden: (isFromLeft: boolean) => ({
		opacity: 0,
		x: isFromLeft ? -100 : 100, // Slide from left or right based on parameter
	}),
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

// Simple fade-in animation for mobile
export const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: "easeOut",
		},
	},
};

// Animation variants for the container (controls staggered children)
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3, // Delay between each child animation
			delayChildren: 0.2, // Initial delay before starting animations
		},
	},
};

// Animation variants for the pulse effect
export const pulseVariants = {
	hidden: {
		opacity: 0,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		scale: [0.95, 1.05, 0.95, 1.05, 0.95, 1], // More defined pulse sequence
		transition: {
			duration: 2,
			times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Timing for each scale value
			ease: "easeInOut",
		},
	},
};

// Animation variants for slide-out effects
export const slideOutVariants = {
	hidden: (isToLeft: boolean) => ({
		opacity: 0,
		x: isToLeft ? -25 : 75,
		y: isToLeft ? -40 : -45,
	}),
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};
