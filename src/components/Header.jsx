import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const logout = () => {
    localStorage.removeItem('LoggedIn');
    window.open('/login', '_self');
  };
  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Link to='/'>
            <h1 className='text-white'>Card Finder</h1>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto d-flex align-items-center'>
              {localStorage.getItem('LoggedIn') && (
                <DropdownButton id='dropdown-basic-button' title='Profile'>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </DropdownButton>
              )}
              <Link to='/about'>
                <li className='px-3 text-white'>About</li>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
