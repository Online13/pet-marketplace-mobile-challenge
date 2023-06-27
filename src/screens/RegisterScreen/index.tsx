import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import Logo from "../../share/components/atoms/presentation/Logo";
import { Font, utilitiesStyle } from "../../style";
import Button from "../../share/components/atoms/action/Button";
import { THEME } from "../../data";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
	const register = () => {};
	const navigation = useNavigation();
	const goToLogin = () => {
		navigation.navigate("/login");
	};

	return (
		<View style={[styles.root]}>
			<View style={styles.logo}>
				<Logo />
			</View>
			<View style={[styles.form]}>
				<View style={styles.title}>
					<Text style={[styles.h1, Font.Inter[800]]}>
						Create an account
					</Text>
					<View style={styles.bottomAction}>
						<Text style={[Font.Inter[500]]}>
							Have already an account ?
						</Text>
						<Pressable onPress={goToLogin}>
							<Text style={[styles.link, Font.Inter[800]]}>Login</Text>
						</Pressable>
					</View>
				</View>
				<View style={styles.formGroup}>
					<Text style={[styles.label, Font.Inter[700]]}>username</Text>
					<TextInput placeholder="username" style={[styles.input]} />
				</View>
				<View style={styles.formGroup}>
					<Text style={[styles.label, Font.Inter[700]]}>Email</Text>
					<TextInput
						placeholder="email"
						secureTextEntry
						style={[styles.input]}
					/>
				</View>
				<View style={styles.formGroup}>
					<Text style={[styles.label, Font.Inter[700]]}>password</Text>
					<TextInput
						placeholder="password"
						secureTextEntry
						style={[styles.input]}
					/>
				</View>
				<View style={styles.action}>
					<Button title="Register" onPress={register} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	logo: {
		padding: 40,
	},
	title: {
		paddingBottom: 30,
	},
	h1: {
		fontSize: 30,
	},
	form: {
		width: "100%",
		maxWidth: 340,
		gap: 18,
	},
	formGroup: {},
	label: {
		paddingBottom: 4,
		textTransform: "capitalize",
	},
	input: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: "silver",
	},
	bottomAction: {
		width: "100%",
		flexDirection: "row",
		gap: 4,
		paddingTop: 20,
	},
	link: {
		color: THEME.accent,
	},
	action: {
		paddingTop: 40,
	},
});
