import React from "react";
import { LoginForm } from "../../components/login-form/LoginForm";
import { MainLayout } from "../../layout/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default Login;
