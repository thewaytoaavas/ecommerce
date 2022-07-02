import React, { useEffect, useState, useRef } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";
import { emailVerificationAdminUser } from "../../helpers/axiosHelper";
import { Alert, Spinner } from "react-bootstrap";

const EmailVerification = () => {
  let [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [runOnce, setRunOnce] = useState(true);

  useEffect(() => {
    const email = searchParams.get("e");
    const verificationCode = searchParams.get("c");
    setRunOnce(false);
    runOnce && submitVerificaitonCode({ email, verificationCode });
  }, []);

  const submitVerificaitonCode = async (obj) => {
    setIsLoading(true);
    const result = await emailVerificationAdminUser(obj);
    setIsLoading(false);
    setResponse(result);
  };

  return (
    <MainLayout>
      <div className="verification mt-5 pt-5">
        <div className="message">
          <h1>Email verification</h1>
          {response?.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {" "}
              {response?.message}
            </Alert>
          )}

          {isLoading && <Spinner variant="primary" animation="border" />}
        </div>
      </div>
    </MainLayout>
  );
};

export default EmailVerification;

// http://localhost:3000/admin-verification?e=a@gmail.com&c=925a01f4-c11b-469e-aa05-2504be7058f1
