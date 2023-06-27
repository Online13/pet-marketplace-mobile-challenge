import { StyleSheet, View } from "react-native";
import { PropsWithChildren } from "react";
import { THEME } from "../../../../data";

export default function HeaderLayout({ children }: PropsWithChildren) {
	return <View style={styles.header}>{children}</View>;
}

const styles = StyleSheet.create({
	header: {
		padding: 18,
		backgroundColor: THEME.white,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
