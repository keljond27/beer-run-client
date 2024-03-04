//import { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

import Login from '../Login/Login';

import logo from '../../assets/logo_transparent.png';
import styles from './FixedNavbar.module.css';

/* interface LoggedInUser {
  name: string | undefined
} */

const FixedNavbar = () => {

/*   const [loggedInUser, setLoggedInUser] = useState<LoggedInUser>({ name: "" });

  const handleUserLogin = () => {
    setLoggedInUser({name: "test"});
  } */

  return (
    <Container fluid>
      <Navbar fixed='top' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand>
            <img className={styles.logo_dropshadow} src={logo} height="50" alt="Beer Run Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Login />
              {/* //TODO add settings component */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default FixedNavbar