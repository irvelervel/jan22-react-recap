import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import obj from '../data.json'
// ../

const MyNavbar = ({ searchQuery, setSearchQuery }) => {
  //   const location = useLocation();

  //   return location.pathname === "/stefano" ? (
  //     <></>
  //   ) : (
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Recap!</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <Link to="/new">
          <div className="nav-link">New appointment</div>
        </Link>
        <Link to="/pricing">
          <div className="nav-link">Pricing</div>
        </Link>
      </Nav>
      <Form inline>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form>
    </Navbar>
  );
  //   );
};

export default MyNavbar;
