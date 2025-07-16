import { create } from "zustand";

interface AppState {
    isLoaded: boolean;
    setLoaded: () => void;
}

const useAppStore = create<AppState>((set) => ({
    isLoaded: false,
    setLoaded: () => set({ isLoaded: true }),
}));

export default useAppStore;
