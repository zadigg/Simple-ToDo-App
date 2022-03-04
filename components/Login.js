function Login() {
  return (
    <login className=" bg-gray-50 w-full h-screen block ">
      <div className="flex flex-col justify-center pt-10 max-w-xs mx-auto">
        <div className="flex justify-center">
          <h1 className=" font-bold text-5xl">Welcome</h1>
        </div>
        {/*  */}

        <div className="pt-9 space-y-6">
          <div>
            <label htmlFor="">
              <span className="">Phone-Number</span>
              <input
                className="border-2 border-gray-300 block w-full rounded-md py-1 px-2"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <span className="">Password</span>
              <input
                className="border-2 border-gray-300 block w-full rounded-md py-1 px-2"
                type="password"
              />
            </label>
          </div>

          <div className="flex justify-between">
            <div>
              <h1>Help</h1>
            </div>
            <div>
              <h1>forgot your password</h1>
            </div>
          </div>

          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer rounded bg-red-500  px-4 py-2 font-bold text-white shadow hover:bg-yellow-400 block w-full"
          />
        </div>
      </div>
    </login>
  );
}

export default Login;
