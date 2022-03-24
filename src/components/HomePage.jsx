import { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";

class HomePage extends Component {
  // I want to fetch the appointments you used at the end of M3

  // for fetching and displaying some data into a react component, you need
  // to put it into the state

  state = {
    appointments: [],
    isLoading: true,
  };

  // you should always put your fetching logic (or any expensive operation)
  // in a lifecycle method that takes place just AFTER the initial render(),
  // so the user will immediately be entertained with something

  componentDidMount() {
    // let's fetch the data!
    this.fetchAppointments();
  }

  fetchAppointments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/agenda/"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data); // <-- this should be an array of agenda appointments
        this.setState({
          appointments: data,
          isLoading: false,
        });
      } else {
        // maybe a server error :(
        console.log("server error");
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-2">
          <Col className="text-center">
            <h2>Welcome to my App!</h2>
            <h4>Appointments available:</h4>
            {/* list here the appointments */}
            {this.state.isLoading && (
              <Spinner variant="warning" animation="border" />
            )}
            <ListGroup>
              {this.state.appointments.map((a) => (
                <ListGroupItem key={a._id}>{a.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
