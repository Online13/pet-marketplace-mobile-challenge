import {
	useFonts,
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from "@expo-google-fonts/inter";
import { PropsWithChildren, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function FontProvider({ children }: PropsWithChildren) {
	const [fontsLoaded] = useFonts({
		"r-100": Inter_100Thin,
		"r-200": Inter_200ExtraLight,
		"r-300": Inter_300Light,
		"r-400": Inter_400Regular,
		"r-500": Inter_500Medium,
		"r-600": Inter_600SemiBold,
		"r-700": Inter_700Bold,
		"r-800": Inter_800ExtraBold,
		"r-900": Inter_900Black,
	});

	const onLayoutRootView = useCallback(async () => {
		console.log("call");
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded)
		return (
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga
				excepturi facere minus enim soluta, expedita tempora accusamus sed
				officiis itaque. Tenetur alias culpa dolorem animi nulla blanditiis
				a eum!
			</Text>
		);

	return (
		<View style={styles.root} onLayout={onLayoutRootView}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});
