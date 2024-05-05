export const createFilterSlice = (set) => ({
  selectedFilter: [],
  setSelectedFilter: (list) => set((state) => ({ ...state, selectedFilter: list })),
});
