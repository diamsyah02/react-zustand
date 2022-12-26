import create from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  email: '',
  password: '',
  setIsLoggedIn: () => set(state => ({ isLoggedIn: !state.isLoggedIn })),
  setEmail: (text) => set(({ email: text })),
  setPassword: (text) => set(({ password: text }))
}))

export default useAuthStore