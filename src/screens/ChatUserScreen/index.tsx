import {
	StyleSheet,
	View,
	Text,
	TextInput,
	FlatList,
	ColorValue,
} from "react-native";
import GoBackAppbar from "../../share/components/molecules/GoBackAppbar";
import ButtonIcon from "../../share/components/atoms/ButtonIcon";
import { Feather } from "@expo/vector-icons";
import { MESSAGE_DATA, THEME } from "../../data";
import { Font } from "../../style";

export default function ChatUserScreen() {
	const handlePress = () => {};

	return (
		<View style={styles.root}>
			<GoBackAppbar title="John Doe" />
			<View style={styles.main}>
				<FlatList
					data={MESSAGE_DATA}
					inverted
					renderItem={({ item }) => {
						const bg: ColorValue = item.owner ? THEME.accent : "#c0c0cc0";
						const color: ColorValue = item.owner
							? THEME.accent_inverse
							: "black";

						return (
							<View
								style={[
									styles.area,
									{
										flexDirection: item.owner ? "row-reverse" : "row",
									},
								]}
							>
								<View style={styles.message}>
									<View
										style={[
											styles.messageContainer,
											{
												backgroundColor: bg,
												borderColor: bg,
												borderWidth: 1,
											},
										]}
									>
										<Text
											style={[
												styles.messageContent,
												{
													color,
												},
												Font.Inter[500],
											]}
										>
											{item.content}
										</Text>
									</View>
									<View style={styles.metadata}>
										<Text style={[styles.date, Font.Inter[500]]}>
											{item.date.toLocaleDateString()}
										</Text>
									</View>
								</View>
							</View>
						);
					}}
					contentContainerStyle={{ gap: 12, paddingVertical: 20 }}
					keyExtractor={(_, i) => `chat-message-${i}`}
				/>
			</View>
			<View style={styles.action}>
				<TextInput placeholder="send message..." style={styles.input} />
				<ButtonIcon onPress={handlePress}>
					<Feather name="send" size={24} color="black" />
				</ButtonIcon>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	main: {
		flex: 1,
	},
	input: {
		flex: 1,
		height: 50,
		paddingLeft: 12,
	},
	action: {
		width: "100%",
		height: 60,
		paddingHorizontal: 12,
		borderTopColor: "silver",
		borderTopWidth: 1,
		alignItems: "center",
		flexDirection: "row",
	},
	area: {
		width: "100%",
		paddingHorizontal: 20,
	},
	message: {
		width: "60%",
	},
	messageContainer: {
		padding: 14,
		borderRadius: 12,
	},
	messageContent: {
		fontSize: 14,
		lineHeight: 18,
	},
	metadata: {
		justifyContent: "center",
		paddingVertical: 4,
	},
	date: {
		fontSize: 12,
		color: "gray",
	},
});
