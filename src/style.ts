import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

export const utilitiesStyle = StyleSheet.create({
	sameRowAlignCenter: {
		flexDirection: "row",
		alignItems: "center",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	sameRowAlignSpaceBetween: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	}
});

type FontValue = `r-${number}${number}${number}`;
type GlobalStyles<T extends string> = {
	[P in T]: (StyleProp<ViewStyle | TextStyle | ImageStyle>) | ((...props: any[]) => StyleProp<ViewStyle | TextStyle | ImageStyle>);
};
export const globalStyle = {
	subTitle: StyleSheet.compose({ gap: 4, }, utilitiesStyle.sameRowAlignCenter),
	subTitleText: {
		fontSize: 20,
		fontWeight: "800",
	},
	text: (font: FontValue = 'r-500') => ({
		fontFamily: font
	}),
	titleInput: {
		fontSize: 22,
		fontWeight: "500",
		marginBottom: 6,
		paddingTop: 6,
		paddingBottom: 6,
		paddingRight: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#00000032",
	}
} satisfies GlobalStyles<"subTitle" | "subTitleText" | "text" | "titleInput">;

export const Font = {
	Inter: {
		100: globalStyle.text('r-100'),
		200: globalStyle.text('r-200'),
		300: globalStyle.text('r-300'),
		400: globalStyle.text('r-400'),
		500: globalStyle.text('r-500'),
		600: globalStyle.text('r-600'),
		700: globalStyle.text('r-700'),
		800: globalStyle.text('r-800'),
		900: globalStyle.text('r-900'),
	}
}