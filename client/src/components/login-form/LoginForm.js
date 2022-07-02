import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { loginAction } from "../../pages/login-registration/loginRegisterAction";
export const LoginForm = () => {
  const dispatch = useDispatch({});
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <h3 className="text-center">Welcome Back</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <div>Need to Register?</div>
      </Form>
    </div>
  );
};
