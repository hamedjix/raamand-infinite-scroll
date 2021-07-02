import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
const Login = () => {
  const loginHandle = () => {
    localStorage.setItem('LoggedIn', 1);
    window.open('/', '_self');
  };
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col md={4} className='text-center'>
          <FormControl
            className='my-2'
            required
            placeholder='Username'
          ></FormControl>
          <FormControl
            className='my-2'
            type='password'
            required
            placeholder='Password'
          ></FormControl>

          <Button className='my-2' onClick={loginHandle}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
