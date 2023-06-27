import {
	ActivityData,
	CategoryData,
	MarketplaceData,
	MessageData,
	PetData,
	PetFood,
} from "./type";

export const THEME = {
	background: "#eaeaea",
	text: "#030303",
	accent: "#302ddb",
	accent_inverse: "#ffffff",
	accent_low: "#302ddb45",
	secondary: "#c12627",
	white: "#ffffff",
};

export const MARKETPLACE_DATA: MarketplaceData[] = [
	{
		id: 1,
		name: "Pet Paradise",
		location: "City A",
	},
	{
		id: 2,
		name: "Furry Friends",
		location: "City B",
	},
	{
		id: 3,
		name: "Pawsome Pets",
		location: "City C",
	},
];

export const ACTIVITY_DATA: ActivityData[] = [
	{
		id: 1,
		type: "adoption",
		title: "Cute Kittens Available",
		market: MARKETPLACE_DATA[0],
		date: new Date("2023-06-01"),
		image: require("./../assets/images/news/the-lucky-neko-uePn9YCTCY0-unsplash.jpg"),
	},
	{
		id: 2,
		type: "adoption",
		title: "Puppies for Loving Homes",
		market: MARKETPLACE_DATA[1],
		date: new Date("2023-06-03"),
		image: require("./../assets/images/news/bharathi-kannan-rfL-thiRzDs-unsplash.jpg"),
	},
	{
		id: 3,
		type: "product",
		title: "Premium Cat Food Sale",
		market: MARKETPLACE_DATA[2],
		date: new Date("2023-06-05"),
		image: require("./../assets/images/news/kabo-RKDRI_LK9c0-unsplash.jpg"),
		price: 80,
		unit: "$",
	},
	{
		id: 4,
		type: "event",
		title: "Rescue Dogs Event",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas optio odio ullam accusamus doloribus hic eius, tenetur culpa nesciunt cum nostrum? Voluptates, architecto consequatur saepe aspernatur debitis adipisci ipsum atque.",
		location: "Antananarivo 101",
		organizator: "John Doe",
		date: new Date("2023-06-07"),
		image: require("./../assets/images/news/markus-winkler-PcKhVNNyEio-unsplash.jpg"),
	},
];

export const CATEGORY_DATA: CategoryData[] = [
	{
		id: 1,
		title: "Dogs",
		route: "dog",
		image: require("../assets/images/category/chiens.jpg"),
	},
	{
		id: 2,
		title: "Cats",
		route: "cat",
		image: require("../assets/images/category/cats.jpg"),
	},
	{
		id: 3,
		title: "Rabbits",
		route: "rabbit",
		image: require("../assets/images/category/rabbits.jpg"),
	},
	{
		id: 4,
		title: "Hamsters",
		route: "hamster",
		image: require("../assets/images/category/hamsters.jpg"),
	},
	{
		id: 5,
		title: "Fish",
		route: "fish",
		image: require("../assets/images/category/fishs.jpg"),
	},
	{
		id: 6,
		title: "Parakeets",
		route: "parakeet",
		image: require("../assets/images/category/parakeets.jpg"),
	},
];

export const DOG_DATA = [
	{
		id: 1,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Puppies",
	},
	{
		id: 2,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Junkins",
	},
	{
		id: 3,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Bob",
	},
	{
		id: 4,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Daemon",
	},
	{
		id: 5,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Venom",
	},
	{
		id: 6,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Jack",
	},
	{
		id: 7,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Helen",
	},
	{
		id: 8,
		idCategory: 1,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/chiens.jpg"),
		title: "Ighor",
	},
];

export const CAT_DATA = [
	{
		id: 1,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Puppies",
	},
	{
		id: 2,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Junkins",
	},
	{
		id: 3,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Bob",
	},
	{
		id: 4,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Daemon",
	},
	{
		id: 5,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Venom",
	},
	{
		id: 6,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Jack",
	},
	{
		id: 7,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Helen",
	},
	{
		id: 8,
		idCategory: 2,
		date: new Date(),
		idOwner: 1,
		image: require("../assets/images/category/cats.jpg"),
		title: "Ighor",
	},
];

export const PET_DATA: PetData[] = [...DOG_DATA, ...CAT_DATA];

function generatorText() {
	const ref =
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, suscipit corporis recusandae ducimus vero cum laborum, nihil laudantium culpa amet itaque iste. Magni molestias est deleniti doloremque necessitatibus numquam nam?";
	const words = ref.split(" ");
	for (let i = 0; i < words.length; i++) {
		const [x, y] = [
			Math.floor(Math.random() * words.length),
			Math.floor(Math.random() * words.length),
		];
		let temp = words[x];
		words[x] = words[y];
		words[y] = temp;
	}
	const newRef = words.join(" ");
	return newRef.slice(30, Math.floor(Math.random() * (newRef.length - 1)));
}

export const MESSAGE_DATA: MessageData[] = Array.from({ length: 30 }).map(
	(_, i) => {
		return {
			id: i,
			content: generatorText(),
			date: new Date(Date.now() + i * 200),
			owner: Math.random() > 0.5,
		};
	}
);

export const PET_FOOD_DATA: PetFood[] = [
	{
		id: 0,
		name: "cereal",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 1,
		name: "kibble",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 2,
		name: "crockets",
		image: "test 2",
	},
	{
		id: 3,
		name: "cereal",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 4,
		name: "kibble",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 5,
		name: "crockets",
		image: "test 2",
	},
	{
		id: 6,
		name: "cereal",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 7,
		name: "kibble",
		image: require("./../assets/images/category/chiens.jpg"),
	},
	{
		id: 8,
		name: "crockets",
		image: "test 2",
	},
];
