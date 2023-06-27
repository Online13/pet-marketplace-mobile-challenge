import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ButtonIcon from "../atoms/action/ButtonIcon";
import { PropsWithChildren } from "react";
import { Font, utilitiesStyle } from "../../../style";
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../../../data";

type GoBackAppbarProps = PropsWithChildren<{
	title?: string;
}>;

export default function GoBackAppbar({ title, children }: GoBackAppbarProps) {
	const navigation = useNavigation();

	return (
		<View style={[styles.header, utilitiesStyle.sameRowAlignSpaceBetween]}>
			<ButtonIcon onPress={() => navigation.goBack()} style={styles.backBtn}>
				<AntDesign name="arrowleft" size={20} color="black" />
			</ButtonIcon>
			{title && (
				<View>
					<Text style={[Font.Inter[700], styles.title]}>{title}</Text>
				</View>
			)}
			<View style={styles.action}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 60,
		padding: 12,
	},
	backBtn: {
		backgroundColor: THEME.white,
	},
	title: {
		fontSize: 16,
	},
	action: {
		minWidth: 42,
	},
});
