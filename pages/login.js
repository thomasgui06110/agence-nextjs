import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";
import { Layout, layout } from "../components/layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const { login, isAuthenticated } = useAuth();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };
  return (
    <Layout>
      <MDBContainer>
        <form onSubmit={onSubmit}>
          <p className="h4 text-center mt-4 mb-3">Connexion</p>
          <div className="grey-text">
            <MDBInput
              label="Nom d'utilisateur"
              name="username"
              icon="user"
              type="text"
              onChange={handleChange("username")}
              group
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Password"
              name="password"
              icon="lock"
              onChange={handleChange("password")}
              group
              type="password"
              validate
            />
          </div>
          <div className="text-center">
            <button type="submit" className="globalButton">
              Connexion
            </button>
          </div>
        </form>
      </MDBContainer>
    </Layout>
  );
};

export default Login;
