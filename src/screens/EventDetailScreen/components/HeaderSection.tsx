import { StyleSheet } from "react-native";
import GoBackAppbar from "../../../share/components/molecules/GoBackAppbar";
import ButtonIcon from "../../../share/components/atoms/ButtonIcon";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../../data";

export default function HeaderSection() {
	return (
		<GoBackAppbar>
			<ButtonIcon onPress={() => {}} style={styles.backBtn}>
				<Entypo name="share" size={20} color="black" />
			</ButtonIcon>
		</GoBackAppbar>
	);
}

const styles = StyleSheet.create({
	backBtn: {
		backgroundColor: THEME.white,
	},
});
