export const createFilterSlice = (set) => ({
  selectedFilter: [],
  setSelectedFilter: (list) => set((state) => ({ ...state, selectedFilter: list })),
  isSearch: false,
  setIsSearch: (s) => set((state) => ({ ...state, isSearch: s })),
});
