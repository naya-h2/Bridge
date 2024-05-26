export const createAdminSlice = (set) => ({
  isLogin: false,
  setIsLogin: (login) => set((state) => ({ ...state, isLogin: login })),
});
