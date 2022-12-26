import create from "zustand";

const useThemeStore = create((set) => ({
  isDark: false,
  setTheme: () => set(state => ({ isDark: !state.isDark }))
}))

export default useThemeStore
