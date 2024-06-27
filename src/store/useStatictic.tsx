import { create } from 'zustand';

type StaticticState = {
	type: string | null;
	tooltip: boolean;
};

type StaticticAction = {
	setType: (type: string | null) => void;
	setHov: (tooltip: boolean) => void;
};

type Statictic = StaticticState & StaticticAction;

export const useStatictic = create<Statictic>((set) => ({
	tooltip: false,
	setHov: (tooltip) => set({ tooltip }),
	type: null,
	setType: (type) => set({ type }),
}));
