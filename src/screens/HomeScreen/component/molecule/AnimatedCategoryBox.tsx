import { StyleSheet, GestureResponderEvent } from "react-native";
import { PropsWithChildren } from "react";
import AnimatedBox from "../../../../share/components/atoms/AnimatedBox";

type AnimatedCategoryBoxProps = PropsWithChildren<{
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}>;

export default function AnimatedCategoryBox({
	children,
	onPress,
}: AnimatedCategoryBoxProps) {
	return (
		<AnimatedBox onPress={onPress} style={styles.pressable}>
			{children}
		</AnimatedBox>
	);
}

const styles = StyleSheet.create({
	pressable: {
		flex: 1,
		height: 180,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#000000",
	},
});
