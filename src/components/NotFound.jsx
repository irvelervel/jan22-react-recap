import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-2">
      <Col className="text-center">
        <h2>404 - Page not found :(</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
