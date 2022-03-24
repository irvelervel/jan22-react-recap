import { Navbar, Nav, Form, Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// import obj from '../data.json'
// ../

const MyNavbar = () => {
  //   const location = useLocation();

  //   return location.pathname === "/stefano" ? (
  //     <></>
  //   ) : (
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
  //   );
};

export default MyNavbar;
