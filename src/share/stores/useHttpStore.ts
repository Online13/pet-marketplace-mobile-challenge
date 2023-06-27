import { create } from "zustand";
import { CategoryData, LoginDataType, PetData, PetFood } from "../../type";
import { CATEGORY_DATA, PET_DATA, PET_FOOD_DATA } from "../../data";
import useTokenStore from "./useTokenStore";

type UseHttpStoreState = {
	getHotCategories: () => Promise<CategoryData[]>;
	getPetNews: () => Promise<unknown[]>;
	getCategoryById: (id: number) => Promise<CategoryData>;
	getPetsByCategory: (idCategory: number) => Promise<PetData[]>;
	getInfo: () => void;
	updateInfo: () => void;
	login: (username: string, password: string) => Promise<LoginDataType>;
	logout: () => Promise<void>;
	getPetFoodStories: () => Promise<PetFood[]>;
};

const useHttpStore = create<UseHttpStoreState>()(() => ({
	async getHotCategories(): Promise<CategoryData[]> {
		return CATEGORY_DATA.slice(0, 3);
	},
	async getPetNews() {
		return [];
	},
	async getCategoryById(id: number): Promise<CategoryData> {
		const category = CATEGORY_DATA.find((c) => c.id === id);
		if (category === undefined) throw new Error("Category not found !");
		return category;
	},
	async getPetsByCategory(idCategory: number): Promise<PetData[]> {
		return PET_DATA.filter((pet) => pet.idCategory === idCategory);
	},
	async getInfo() {},
	async updateInfo() {},
	async getPetFoodStories() {
		return PET_FOOD_DATA;
	},
	async login(username: string, password: string): Promise<LoginDataType> {
		// return {
		// 	success: false,
		// 	message: "Error from server !"
		// }
		console.log(username, password);
		return { success: true, token: "..." };
	},
	async logout() {
		useTokenStore.getState().setToken(null);
	},
}));

export const petsSelector = (state: UseHttpStoreState) => ({
	getHotCategories: state.getHotCategories,
	getPetNews: state.getPetNews,
	getCategoryById: state.getCategoryById,
	getPetsByCategory: state.getPetsByCategory,
	getPetFoodStories: state.getPetFoodStories,
});

export const userInfoSelector = (state: UseHttpStoreState) => ({
	getInfo: state.getInfo,
	updateInfo: state.updateInfo,
});

export const authSelector = (state: UseHttpStoreState) => ({
	login: state.login,
	logout: state.logout,
});

export default useHttpStore;
