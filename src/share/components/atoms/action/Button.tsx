import {
	StyleSheet,
	Text,
	GestureResponderEvent,
	ColorValue,
} from "react-native";
import AnimatedBox from "./AnimatedBox";
import { Font } from "../../../../style";
import { THEME } from "../../../../data";

type ButtonProps = {
	title: string;
	color?: ColorValue;
	background?: ColorValue;
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export default function Button({
	color = THEME.accent_inverse,
	background = THEME.accent,
	title,
	onPress,
}: ButtonProps) {
	return (
		<AnimatedBox
			style={[styles.btn]}
			contentStyle={[
				styles.btnContent,
				{
					backgroundColor: background,
				},
			]}
			onPress={onPress}
		>
			<Text
				style={[
					styles.text,
					Font.Inter[500],
					{
						color: color,
					},
				]}
			>
				{title}
			</Text>
		</AnimatedBox>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	btn: {
		width: "100%",
		height: 40,
		borderRadius: 8,
		overflow: "hidden",
	},
	btnContent: {
		width: "100%",
		height: "100%",
	},
	text: {
		fontSize: 14,
	},
});
