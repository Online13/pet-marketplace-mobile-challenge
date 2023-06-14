import { ColorValue, StyleSheet, View } from "react-native";

interface MaskBackgroundProps {
	zIndex?: number;
	color?: ColorValue;
}

export default function MaskBackground({
	zIndex = 10,
	color = "#00000082",
}: MaskBackgroundProps) {
	return (
		<View
			style={[
				{
					zIndex,
					backgroundColor: color,
				},
				styles.root,
			]}
		/>
	);
}

const styles = StyleSheet.create({
	root: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
});
