import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header(props) {

  let authLinks = ""
  if(props.isAuthenticated){
      authLinks = (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </>
      )
  }

  return (
    <div className="Navbar mb-3">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">Social Network Lite</Navbar.Brand>
            {authLinks}
        </Navbar>
    </div>
  );
}

export default Header;
