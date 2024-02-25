import React from "react";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import "./Login.css";
const LOGIN = [{ OWNER: 1 }, { USER: 2 }];

const Login = ({ value }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>LOGIN</h2>
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
          label={value === LOGIN[0].OWNER ? "Username" : "Phone number"}
          rules={[
            {
              required: true,
              message: `Please input your ${
                value === LOGIN[0].OWNER ? "Username!" : "Phone number!"
              }!`,
            },
          ]}
        >
          <Input
            prefix={
              value === LOGIN[0].OWNER ? (
                <UserOutlined className="site-form-item-icon" />
              ) : (
                <PhoneOutlined />
              )
            }
            placeholder={value === LOGIN[0].OWNER ? "Username" : "Phone number"}
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
            <span className="text-font-weight">
              Don’t you have an account?{" "}
            </span>
            <a className="link" href="/signup" style={{ fontWeight: "600" }}>
              Signup
            </a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
