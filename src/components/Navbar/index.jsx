import "./style.css";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const NavbarComponent = ({ navLinks, brand }) => {
  return (
    <Navbar expand="lg" className="navbar-dark text-center sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            {navLinks.map((link) => (
              <div className="nav-item" key={link.id}>
                <NavLink className="nav-link" href={link.path}>{link.title}</NavLink>
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
