import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import * as authActions from "../../redux/actions/auth";
import { bindActionCreators } from "redux";

import AuthService from "../../authService";

function Header(props) {

  let client = new AuthService();

  const [errorMessage, setErrorMessage] = useState(null);

  let handleSignOut = (event) => {
    client.logout(props.auth.token).then((response) => {
      // handle success
      localStorage.removeItem('auth');
      props.actions.logout()
    })
      .catch((error) => {
        console.log(error)
        // handle error
        setErrorMessage(error.response.data.message)
      })
  }

  let authLinks = (
    <>
      <Navbar.Text className="font-weight-bold mx-3">
        Welcome, Guest
      </Navbar.Text>
      <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
    </>
  )
  if (props.isAuthenticated) {
    authLinks = (
      <>
        <Navbar.Text className="font-weight-bold mx-3">
          Hello, {props.auth.email}
        </Navbar.Text>
        <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
      </>
    )
  }

  return (
    <div className="Navbar mb-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Captsone React FE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {authLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {errorMessage && <div className="container mt-3"><Alert variant="danger">{errorMessage}</Alert></div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
