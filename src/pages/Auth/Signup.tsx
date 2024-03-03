import React from "react";
import InputErrorLabel from "../../components/InputErrorLabel";
import Container from "../../components/Container";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Signup = () => {
  const [state, setState] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {} as { [key: string]: string },
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <h1 className="mb-8 mt-12 text-center text-2xl font-bold">Sign Up</h1>
        <form method="POST" onSubmit={handleSubmit} className="mx-auto flex w-full max-w-sm flex-col gap-4">
          <div>
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              onChange={handleChange}
              required
              value={state.userName}
              className="input input-bordered w-full"
            />
            {state?.errors?.userName && <InputErrorLabel errorMsg={state.errors.userName} />}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              value={state.email}
              className="input input-bordered w-full"
            />
            {state?.errors?.email && <InputErrorLabel errorMsg={state.errors.email} />}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              value={state.password}
              className="input input-bordered w-full"
            />
            {state?.errors?.password && <InputErrorLabel errorMsg={state.errors.password} />}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
              value={state.confirmPassword}
              className="input input-bordered w-full"
            />
            {state?.errors?.confirmPassword && <InputErrorLabel errorMsg={state.errors.confirmPassword} />}
          </div>
          {loading ? (
            <button type="button" className="btn btn-secondary">
              <span className="loading loading-spinner"></span>
              Logging In
            </button>
          ) : (
            <button className="btn btn-secondary">Sign Up</button>
          )}
          {state?.errors?.error && (
            <div role="alert" className="alert border border-red-200 bg-red-100">
              <HiOutlineExclamationTriangle className="text-xl" />
              <span>{state.errors.error}</span>
            </div>
          )}
          <div className="text-center">
            Already Have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
