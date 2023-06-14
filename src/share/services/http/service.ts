import { CATEGORY_DATA, PET_DATA } from "../../../data";
import { CategoryData, PetData } from "../../../type";
import useTokenStore from "../../stores/useTokenStore";

export class Service {

	public pet = {
		async getHotCategories(): Promise<CategoryData[]> {
			return CATEGORY_DATA.slice(0, 3);
		},
		async getPetNews() {

		},
		async getCategoryById(id: number): Promise<CategoryData> {
			const category = CATEGORY_DATA.find((c) => c.id === id);
			if (category === undefined)
				throw new Error("Category not found !");
			return category;
		},
		async getPetsByCategory(idCategory: number): Promise<PetData[]> {
			return PET_DATA.filter((pet) => pet.idCategory === idCategory);
		}
	};

	public user = {
		async getInfo() {

		},
		async updateInfo() {

		},
	};

	public auth = {
		async login(username: string, password: string): Promise<{ success: boolean, message?: string, token: string }> {
			// return {
			// 	success: false,
			// 	message: "Error from server !"
			// }
			return { success: true, token: "..." };
		},
		async logout() {
			useTokenStore.getState().setToken(null)
		}
	}

};