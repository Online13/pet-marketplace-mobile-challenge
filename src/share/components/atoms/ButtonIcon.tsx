import { PropsWithChildren } from "react";
import {
	StyleSheet,
	TouchableOpacity,
	type GestureResponderEvent,
	type ViewStyle,
	type StyleProp,
} from "react-native";
import { THEME } from "../../../data";

type ButtonIconProps = PropsWithChildren<{
	onPress: ((event: GestureResponderEvent) => void) | undefined;
	style?: StyleProp<ViewStyle>;
}>;

export default function ButtonIcon({
	style,
	onPress,
	children,
}: ButtonIconProps) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.root, style]}>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: THEME.background,
		borderRadius: 50,
		width: 40,
		aspectRatio: 1,
		justifyContent: "center",
		alignItems: "center",
		elevation: 1,
	},
});
