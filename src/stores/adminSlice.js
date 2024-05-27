export const createAdminSlice = (set) => ({
  isLogin: 'main',
  setIsLogin: (login) => set((state) => ({ ...state, isLogin: login })),
});
