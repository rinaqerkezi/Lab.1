import React from 'react';
import { Card, Form, Input, Button, Typography, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();  // Create a navigate function

  const onFinish = async (values) => {
    try {
      // Make a POST request to the login endpoint to authenticate the user
      const response = await axios.post('https://localhost:7026/api/Guest/login', {
        email: values.email,
        passi: values.password,  // Note: The key here must match the property name used in your ASP.NET model
      });

      // Check if login is successful
      if (response.status === 200) {
        // Check if the credentials are for admin
        if (values.email === 'admin@gmail.com' && values.password === 'adminadmin') {
          message.success('Login successful as admin!');
          localStorage.setItem('guest', JSON.stringify({ email: values.email }));

          // Redirect to the admin page
          navigate('/admin');
        } else {
          // Handle other user logins if needed
          message.error('Invalid credentials for admin. Please try again.');
        }
      }
    } catch (error) {
      // Handle unsuccessful login attempts or server errors
      if (error.response && error.response.status === 401) {
        message.error('Invalid credentials. Please try again.');
      } else {
        message.error('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <Card style={{ width: 350, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Login</Title>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }} size="large">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
