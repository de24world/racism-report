import React, { useState } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

type Props = {};

const Register = (props: Props) => {
  const router = useRouter();
  const { user, signup } = useAuth();
  // console.log(user, 'user in Register Component');
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const openModal = () => {
    Modal.success({
      content: 'success Signup',
    });
  };

  const onSignup = async (values: any) => {
    // e.preventDefault(values);
    try {
      await signup(data.email, data.password);
      openModal();
      router.push({
        pathname: '/login',
      });
    } catch (err: any) {
      console.log(err, 'err Message onSignup');
      if (err.code === 'auth/weak-password') {
        return message.error('password should be at least 6 characters');
      }
    }
    // console.log(values, 'values succes in onSignup');

    // console.log(data, 'data succes in onSignup');
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
