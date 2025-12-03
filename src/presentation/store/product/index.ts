import { create } from "zustand";

interface ProductStore {
  products: [];
  setProducts: (products: []) => void;
  reset: () => void;
}
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: []) => set({ products }),
  reset: () =>
    set({
      products: [],
    }),
}));
