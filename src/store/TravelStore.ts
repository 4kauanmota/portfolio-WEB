import { create } from "zustand";

type useTravelStoreType = {
  travel: boolean;
  setTravel: () => void;
};

const useTravelStore = create<useTravelStoreType>((set) => ({
  travel: false,

  setTravel: () => {
    set((state: any) => ({ travel: !state.travel }));
  },
}));

export default useTravelStore;
