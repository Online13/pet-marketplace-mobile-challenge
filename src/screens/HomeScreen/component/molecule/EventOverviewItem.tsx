import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { EventActivityData } from "../../../../type";
import MaskBackground from "../../../../share/components/atoms/MaskBackground";
import { FontAwesome5 } from "@expo/vector-icons";
import { Font } from "../../../../style";
import { THEME } from "../../../../data";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

type EventOverviewItemProps = EventActivityData;

export default function EventOverviewItem(data: EventOverviewItemProps) {
	const navigation = useNavigation();
	const handlePress = useCallback(() => {
		navigation.navigate("/event/detail", { id: data.id });
	}, [data, navigation]);

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
			<View style={styles.root}>
				<View style={styles.about}>
					<Text style={[styles.subtitle, Font.Inter[700]]}>Event</Text>
					<Text style={[styles.title, Font.Inter[500]]}>{data.title}</Text>
				</View>
				<View style={styles.image}>
					<Image
						source={data.image}
						style={{ width: "100%", height: "100%" }}
						resizeMode="cover"
					/>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={18} color={THEME.white} />
						<Text style={[styles.date, Font.Inter[500]]}>
							{data.date.toDateString()}
						</Text>
					</View>
					<MaskBackground />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	root: {
		elevation: 1,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "silver",
		overflow: "hidden",
		backgroundColor: THEME.white,
	},
	legend_text: {
		fontSize: 16,
		color: THEME.background,
	},
	image: {
		width: "100%",
		height: 200,
		position: "relative",
		zIndex: 10,
		overflow: "hidden",
		backgroundColor: "silver",
	},
	about_metadata: {
		paddingVertical: 12,
		paddingHorizontal: 18,
	},
	about: {
		padding: 16,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	action: {
		flex: 1,
		padding: 12,
	},
	metadata: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 30,
		width: "100%",
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
		padding: 12,
		backgroundColor: "#270ecc",
	},
	date: {
		fontSize: 16,
		color: THEME.white,
	},
	subtitle: {
		fontSize: 16,
		color: THEME.text,
	},
	title: {
		fontSize: 20,
		color: THEME.text,
	},
});
