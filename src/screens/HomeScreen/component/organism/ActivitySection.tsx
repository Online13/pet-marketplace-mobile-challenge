import { StyleSheet, View, FlatList } from "react-native";
import NewActivityItem from "../molecule/NewActivityItem";
import { ACTIVITY_DATA, THEME } from "../../../../data";

export default function ActivitySection() {
	return (
		<View style={styles.root}>
			<FlatList
				data={ACTIVITY_DATA}
				nestedScrollEnabled
				scrollEnabled={false}
				renderItem={({ item }) => {
					return <NewActivityItem {...item} />;
				}}
				style={styles.list}
				contentContainerStyle={styles.content_list}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		padding: 12,
		paddingTop: 0,
		backgroundColor: THEME.white,
	},
	heading_title: {
		fontSize: 24,
		fontWeight: "800",
	},
	header: {
		paddingBottom: 20,
	},
	scroll_view: {
		flex: 1,
	},
	list: {
		width: "100%",
		height: "100%",
	},
	content_list: {
		gap: 18,
	},
});
