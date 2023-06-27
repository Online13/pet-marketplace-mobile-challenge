import { StyleSheet, View } from "react-native";
import CategorySection from "./component/organism/CategorySection";
import HeaderSection from "./component/organism/HeaderSection";
import ActivitySection from "./component/organism/ActivitySection";
import { ScrollView } from "react-native-gesture-handler";
import { THEME } from "../../data";
import { Ionicons } from "@expo/vector-icons";
import AnimatedBox from "../../share/components/atoms/action/AnimatedBox";
import ServiceModal from "./component/organism/ServiceModal";
import { useCallback, useState } from "react";
import { utilitiesStyle } from "../../style";
import StoriesSection from "./component/organism/StoriesSection";

export default function HomeScreen() {
	const [showServiceModal, setShowServiceModal] = useState(false);
	const closeServiceModal = useCallback(() => {
		setShowServiceModal(false);
	}, []);
	const handleChooseService = () => {
		setShowServiceModal(true);
	};

	return (
		<View style={styles.root}>
			<ScrollView
				style={styles.scroller}
				nestedScrollEnabled
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.root_container}
			>
				<HeaderSection />
				<StoriesSection />
				<CategorySection />
				<ActivitySection />
			</ScrollView>
			<AnimatedBox
				onPress={handleChooseService}
				style={styles.action}
				config={{
					durationIn: 50,
					durationOut: 50,
					scaleIn: 0.8,
					scaleOut: 1,
				}}
			>
				<View style={[styles.btn, utilitiesStyle.center]}>
					<Ionicons name="add" size={38} color={THEME.accent_inverse} />
				</View>
			</AnimatedBox>
			<ServiceModal show={showServiceModal} close={closeServiceModal} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		position: "relative",
	},
	scroller: {
		flex: 1,
		backgroundColor: THEME.white,
	},
	root_container: {
		gap: 6,
	},
	action: {
		position: "absolute",
		bottom: 24,
		right: 24,
	},
	btn: {
		aspectRatio: 1,
		elevation: 3,
		padding: 10,
		borderRadius: 100,
		backgroundColor: THEME.accent,
	},
});
