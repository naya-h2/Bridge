export const createAdminSlice = (set) => ({
  isLogin: '',
  setIsLogin: (login) => set((state) => ({ ...state, isLogin: login })),
});
