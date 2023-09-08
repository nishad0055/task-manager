import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col my-5">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up!</h1>

            <form action="">
              <div>
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="userName"
                  placeholder="User Name"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="bio"
                  placeholder="Bio"
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-active btn-primary my-1">
                Create Account
              </button>
            </form>

            <div className="text-grey-dark mt-4">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/login">
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
