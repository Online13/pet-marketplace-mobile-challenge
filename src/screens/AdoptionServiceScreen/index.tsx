import { StyleSheet, View } from "react-native";
import HeaderSection from "./components/HeaderSection";
import FormSection from "./components/FormSection";
import ActionSection from "./components/ActionSection";
import { useCallback } from "react";

export default function AdoptionServiceScreen() {
	const handleSubmit = useCallback(() => {}, []);

	return (
		<View style={styles.root}>
			<View style={styles.form}>
				<HeaderSection />
				<FormSection />
			</View>
			<ActionSection onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	form: {
		flex: 1,
	},
});
