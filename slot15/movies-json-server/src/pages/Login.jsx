import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../contexts/AuthContext';

const Login = () => {
  const { user, loading } = useAuthState();
  const { login } = useAuthDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user) return <Navigate to="/movies" replace />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await login(username, password);
    if (res.success) {
      navigate('/movies');
    } else {
      setError(res.message || 'Đăng nhập thất bại');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Đăng nhập</Card.Title>
              {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
              <Form className="mt-3" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" variant="primary" disabled={loading}>Đăng nhập</Button>
                </div>
              </Form>
              <div className="mt-3 small text-muted">Demo: admin/admin123, user/user123</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;


