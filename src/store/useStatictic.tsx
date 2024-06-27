import { create } from 'zustand';

type StaticticState = {
	type: string | null;
};

type StaticticAction = {
	setType: (type: string | null) => void;
};

type Statictic = StaticticState & StaticticAction;

export const useStatictic = create<Statictic>((set) => ({
	type: null,
	setType: (type) => set({ type }),
}));
