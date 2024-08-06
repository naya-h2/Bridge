export const createAdminSlice = (set) => ({
  isLogin: '',
  setIsLogin: (login) => set((state) => ({ ...state, isLogin: login })),
  accessToken: '',
  setAccessToken: (token) => set((state) => ({ ...state, accessToken: token })),
});
