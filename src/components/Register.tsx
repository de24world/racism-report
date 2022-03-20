import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useAuth } from '../context/AuthContext';

type Props = {};

const Register = (props: Props) => {
  const { user, signup } = useAuth();
  // console.log(user, 'user in Register Component');
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const onSignup = async (e: any) => {
    // e.preventDefault();
    setError(null);
    try {
      await signup(data.email, data.password);
    } catch (err) {
      // setError(err.message)
      // if (error.message !== null) {
      //   this.setState({ errorMessage: error.message });
      // } else {
      //   this.setState({ errorMessage: null });
      // }
      console.log(err, 'err Message onSignup');
    }

    console.log(data, 'data succes in onSignup');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('onFinishFailed Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSignup}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input right email!',
            },
          ]}
        >
          <Input
            name="username"
            value={data.email}
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password
            name="password"
            value={data.password}
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <p>error Message : {data.errorMessage! == null ? <>{data.errorMessage}</> : null}</p> */}
      {/* <p>error Message : {data.errorMessage}</p> */}
    </>
  );
};

export default Register;
