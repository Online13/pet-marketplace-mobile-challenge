import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

type UseTokeStoreState = {
	token: string | null;
	setToken: (tk: string | null) => void;
}

const useTokenStore = create<UseTokeStoreState>()(
	persist(
		(set, get) => ({
			token: null,
			setToken: (tk: null | string) => {
				set({ token: tk })
			}
		}),
		{
			name: 'local-token',
			storage: createJSONStorage(() => AsyncStorage)
		}
	)
);

export default useTokenStore