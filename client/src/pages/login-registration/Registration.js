import React from "react";
import { RegistrationForm } from "../../components/registration-form/RegistrationForm";
import { MainLayout } from "../../layout/MainLayout";

const Registration = () => {
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <RegistrationForm />
      </div>
    </MainLayout>
  );
};

export default Registration;
