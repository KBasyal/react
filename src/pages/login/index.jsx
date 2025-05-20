const Login = () => {
    return (
        <>
            <div className="">

                <div className="">
                    <label htmlFor="Email">
                        <span className="text-sm font-medium text-gray-700"> Email </span>
                        <input
                            type="email"
                            id="Email"
                            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        />
                    </label>
                    <label htmlFor="Password">
                        <span className="text-sm font-medium text-gray-700"> Password </span>
                        <input
                            type="password"
                            id="Password"
                            className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        />
                    </label>

                </div>

            </div>



        </>
    )
}

export default Login;