import useAuthStore from "../stores/authStore";
import useThemeStore from "../stores/themeStore"

const Home = () => {
  const auth = useAuthStore()
  const theme = useThemeStore()

  return (
    <>
      <div className={`w-full h-screen flex justify-center items-center space-x-4 ${theme.isDark ? 'bg-red-500' : 'bg-blue-500'}`}>
        <button className="bg-white rounded py-3 p-6" onClick={theme.setTheme}>Switch Theme</button>
        <button className="bg-black text-white rounded py-3 p-6" onClick={auth.setIsLoggedIn}>Logout</button>
      </div>
    </>
  );
}

export default Home