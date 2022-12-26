import useAuthStore from "../stores/authStore";

const Login = () => {
  const auth = useAuthStore()
  
  function onLogin(e) {
    e.preventDefault()
    if(auth.email == '' && auth.password == '') return alert('Mohon isi email & password')
    auth.setIsLoggedIn()
  }

  return (
    <>
      <div className="flex justify-center h-screen bg-gray-200">
        <div className="w-full md:w-3/4 flex justify-center items-center bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto p-2 md:p-0">
          <div className="border border-black shadow-2xl bg-white rounded p-10">
            <div className="text-4xl mb-5">Login <strong>AES</strong></div>
            <form onSubmit={onLogin}>
              <div className="mb-4">
                <input type="email" id="email" className="w-full rounded p-3 border border-black" placeholder="Masukkan Email..." onChange={text => auth.setEmail(text.target.value)} required="" />
              </div>
              <div className="mb-4">
                <input type="password" id="password" className="w-full rounded p-3 border border-black" placeholder="Masukkan Password..." onChange={text => auth.setPassword(text.target.value)} required="" />
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" className="w-full pt-2 pb-2 rounded text-white border border-blue-700 hover:bg-white bg-blue-700 hover:text-blue-700"> Login </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login