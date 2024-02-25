import React from "react";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Segmented } from "antd";

import "./SignUp.css";

const SignUp = () => {
  const options = [
    { label: "OWNER", value: 1 },
    { label: "USER", value: 2 },
  ];
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="content-sign-up-center">
      <Segmented
        size="large"
        defaultValue={1}
        className="height-segmented"
        style={{
          marginBottom: 8,
          backgroundColor: "#D9D9D9",
        }}
        options={options}
        block={true}
      />
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="input"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            className="input"
          />
        </Form.Item>

        <Form.Item
          name="phonenumber"
          label="PhoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined />}
            placeholder="PhoneNumber"
            className="input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="input"
          />
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          label="ConfirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        </Form.Item>

        <Form.Item className="flex">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password ?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block={true}
          >
            <span
              style={{ color: "#F6F6BD", fontWeight: "700", fontSize: "15px" }}
            >
              Sign In
            </span>
          </Button>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="text-font-weight">Already have an account? </span>
            <a className="link" href="/auth" style={{ fontWeight: "600" }}>
              Login
            </a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUp;
