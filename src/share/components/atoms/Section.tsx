import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Font, utilitiesStyle } from "../../../style";

type SectionProps = PropsWithChildren<{
	title: string;
}>;

export default function Section({ title, children }: SectionProps) {
	return (
		<>
			<View style={[utilitiesStyle.sameRowAlignCenter, styles.tabs]}>
				<Text style={[styles.tabText, Font.Inter[500]]}>{title}</Text>
			</View>
			{children}
		</>
	);
}

const styles = StyleSheet.create({
	tabs: {
		gap: 7,
		marginTop: 28,
		marginBottom: 12,
	},
	tabText: {
		color: "gray",
		fontSize: 16,
		fontWeight: "600",
		textTransform: "uppercase",
	},
});
