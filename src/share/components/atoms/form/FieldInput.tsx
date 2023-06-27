import {
	StyleSheet,
	View,
	Text,
	TextInput,
	KeyboardTypeOptions,
} from "react-native";
import { THEME } from "../../../../data";

type FieldViewProps = {
	title: string;
	placeholder: string;
	keyboardType?: KeyboardTypeOptions;
	value?: string;
	onChangeText?: (t: string) => void;
};

export default function FieldInput({
	title,
	keyboardType = "default",
	placeholder,
	value = "",
	onChangeText = () => {},
}: FieldViewProps) {
	return (
		<View style={styles.field}>
			<Text style={styles.field_title}>{title}</Text>
			<TextInput
				value={value}
				style={styles.textInput}
				placeholder={placeholder}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	field: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#00000032",
		paddingHorizontal: 20,
	},
	field_title: {
		fontWeight: "bold",
		fontSize: 16,
		textTransform: "capitalize",
	},
	field_value: {
		color: "gray",
		fontSize: 16,
	},
	textInput: {
		borderBottomColor: THEME.text,
		borderBottomWidth: 1,
		height: "100%",
		paddingHorizontal: 12,
	},
});
