import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { GoogleOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

type Props = {};

function Login({}: Props) {
  const router = useRouter();
  const { user, login, googleLogin, googleLogout } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  // console.log(auth, 'auth with Firebase');
  //   const userData = createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  const onLogin = async (e: any) => {
    // e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onLogin}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
          <Input
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or
          <Button>
            <Link href="/signup">
              <a>Register</a>
            </Link>
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" icon={<GoogleOutlined />} onClick={googleLogin}>
        Google
      </Button>
    </>
  );
}

export default Login;
