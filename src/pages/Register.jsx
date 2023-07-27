import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setVaslues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* Name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
