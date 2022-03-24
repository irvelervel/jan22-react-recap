import { Container } from "react-bootstrap";

const MyFooter = () => (
  <footer className="footer-element">
    <Container>
      <div>Strive / Epicode {new Date().getFullYear()}</div>
    </Container>
  </footer>
);

export default MyFooter;
