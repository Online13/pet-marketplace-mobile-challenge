import { StyleSheet, View, GestureResponderEvent } from "react-native";
import Button from "../../../share/components/atoms/Button";

type ActionSectionProps = {
	onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export default function ActionSection({ onPress }: ActionSectionProps) {
	return (
		<View style={styles.root}>
			<Button title="Ajouter" onPress={onPress} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		paddingHorizontal: 12,
		paddingTop: 20,
		paddingBottom: 12,
	},
});
