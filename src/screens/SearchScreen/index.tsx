import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/molecules/SearchBar";
import { THEME } from "../../data";
import ARTICLES from "./../../data/product.json";

const Articles = ARTICLES.sort(() => (Math.random() > 0.5 ? 1 : 0));

export default function SearchScreen() {
	return (
		<View style={styles.root}>
			<SearchBar />
			<FlatList
				key={"#"}
				numColumns={2}
				data={Articles}
				style={styles.flatlist}
				columnWrapperStyle={styles.column}
				contentContainerStyle={styles.contentFlatlist}
				keyExtractor={(item) => `article-${item.id}`}
				renderItem={({ item: article }) => {
					return (
						<View style={styles.article}>
							<View style={styles.imageContent}>
								<Image
									source={{
										uri: article.img,
									}}
									resizeMode="contain"
									style={styles.image}
								/>
							</View>
							<View>
								<Text>{article.title}</Text>
								<Text>{article.price}</Text>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.white,
	},
	main: {},
	article: {
		flex: 1,
		padding: 12,
	},
	imageContent: {
		width: "100%",
		aspectRatio: 1,
		padding: 12,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	flatlist: {
		gap: 12,
		padding: 12,
	},
	contentFlatlist: {
		gap: 12,
	},
	column: {
		gap: 12,
	},
});
