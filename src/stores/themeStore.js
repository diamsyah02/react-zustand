import create from "zustand";

const useThemeStore = create((set) => ({
  isDark: false,
  color: {
    light : 'bg-gray-200',
    dark: 'bg-gray-700',
  },
  setTheme: () => set(state => ({ isDark: !state.isDark }))
}))

export default useThemeStore
