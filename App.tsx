import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Routes from "./src/route";
import "react-native-gesture-handler";
import { THEME } from "./src/data";
import FontProvider from "./src/share/providers/font/provider";

function App() {
	return (
		<SafeAreaView style={styles.root}>
			<FontProvider>
				<Routes />
				<StatusBar backgroundColor={THEME.white} barStyle="dark-content" />
			</FontProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.background,
	},
});

export default App;
