import { StyleSheet, Text } from "react-native";
import AnimatedBox from "../../../../share/components/atoms/AnimatedBox";
import { Font, utilitiesStyle } from "../../../../style";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../../../route/type";

type ServiceItemButtonProps = {
	text: string;
	icon: ReactNode;
	onPress: () => void;
	path: keyof StackParamList;
};

export default function ServiceItemButton({
	icon,
	text,
	path,
	onPress = () => {},
}: ServiceItemButtonProps) {
	const navigation = useNavigation();
	const handlePress = () => {
		onPress();
		navigation.navigate(path as any);
	};

	return (
		<AnimatedBox
			onPress={handlePress}
			contentStyle={[styles.serviceContent, utilitiesStyle.center]}
			style={[styles.service]}
			config={{
				durationIn: 10,
				durationOut: 10,
				scaleIn: 0.9,
				scaleOut: 1,
			}}
		>
			{icon}
			<Text style={[styles.text, Font.Inter[500]]}>{text}</Text>
		</AnimatedBox>
	);
}

const styles = StyleSheet.create({
	service: {
		gap: 20,
		width: "40%",
		aspectRatio: 1,
	},
	serviceContent: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "white",
		padding: 20,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
		color: "white",
	},
});
