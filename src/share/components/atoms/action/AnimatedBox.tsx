import {
	StyleSheet,
	Pressable,
	Animated,
	type GestureResponderEvent,
	type ViewStyle,
	type StyleProp,
	Easing,
} from "react-native";
import { PropsWithChildren, useRef } from "react";

type AnimationConfig = {
	durationIn: number;
	durationOut: number;
	scaleIn: number;
	scaleOut: number;
};

type AnimatedBoxProps = PropsWithChildren<{
	config?: AnimationConfig;
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
	contentStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
}>;

export default function AnimatedBox({
	children,
	onPress,
	style = {},
	contentStyle = {},
	config = {
		durationIn: 100,
		durationOut: 100,
		scaleIn: 0.95,
		scaleOut: 1,
	},
}: AnimatedBoxProps) {
	const scaleValue = useRef(new Animated.Value(1));

	const scaleIn = () => {
		Animated.timing(scaleValue.current, {
			toValue: config.scaleIn,
			duration: config.durationIn,
			useNativeDriver: true,
			easing: Easing.bounce,
		}).start();
	};

	const scaleOut = () => {
		Animated.timing(scaleValue.current, {
			duration: 0,
			useNativeDriver: true,
			easing: Easing.bounce,
			toValue: config.scaleOut,
		}).start();
	};

	return (
		<Pressable
			onPressIn={scaleIn}
			onPressOut={scaleOut}
			onPress={onPress}
			style={style}
		>
			<Animated.View
				style={[
					styles.root,
					{ transform: [{ scale: scaleValue.current }] },
					contentStyle,
				]}
			>
				{children}
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
});
