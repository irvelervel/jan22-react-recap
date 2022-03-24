import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// appointment structure
// "name": string,
// "description": string,
// "price": number/string,
// "time": string,

// AppointmentForm will have 2 usages:
// 1) creating a new appointment (if I'm on /new) <-- POST
// 2) editing an existing appointment (if I'm on /details/:appointmentId) <-- PUT

const AppointmentForm = () => {
  // so we need a state for remembering the form's values
  const [appointment, setAppointment] = useState({
    name: "",
    description: "",
    price: 10,
    time: "",
  });

  const params = useParams();
  const appointmentId = params.appointmentId;
  // appointmentId can be undefined <-- I'm on /new
  // appointmentId is something <-- I'm on /details/:appointmentId

  // if I have an appointmentId, what changes?
  // 1) it should NOT start from an empty state, it should start from the existing resource
  // 2) it should perform a PUT and not a POST when saving

  useEffect(() => {
    if (appointmentId) {
      // it means I should fetch the appointment data for pre-filling the form!
      fetchAppointmentId();
    }
  }, []);

  const fetchAppointmentId = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/agenda/" + appointmentId
      );
      if (response.ok) {
        let data = await response.json();
        // now data should be the object containing all the details of the specified appointment
        // data is an object containing name, description, price and time
        setAppointment({
          name: data.name,
          description: data.description,
          price: data.price,
          time: data.time.split(".000Z")[0],
        });
      } else {
        alert("snap, we got an error :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitAppointment = async (e) => {
    e.preventDefault();
    // this is needed JUST on the FORM event!
    try {
      let response = await fetch(
        // appointmentId tells me if I'm in creation mode, or in edit mode
        appointmentId
          ? "https://striveschool-api.herokuapp.com/api/agenda/" + appointmentId
          : "https://striveschool-api.herokuapp.com/api/agenda/",
        {
          method: appointmentId ? "PUT" : "POST",
          body: JSON.stringify(appointment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        // our appointment got saved! :partying_face:
        alert("SAVED! :O");
        // if I would parse the body of this response with .json()
        // we'll probably receive the newly generated appointment
        // but we don't need it right now
        if (!appointmentId) {
          setAppointment({
            name: "",
            description: "",
            price: 10,
            time: "",
          });
        }
        // this will empty the form in a case of success
      } else {
        alert("an error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-2">
        <Col className="text-center">
          <Form onSubmit={submitAppointment}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={appointment.name}
                required
                onChange={(e) =>
                  // setAppointment({
                  //   name: e.target.value,
                  //   description: appointment.description,
                  //   price: appointment.price,
                  //   time: appointment.time,
                  // })
                  setAppointment({
                    ...appointment, // <-- this is for NOT LOSING the other fields!
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                required
                value={appointment.description}
                onChange={(e) =>
                  setAppointment({
                    ...appointment,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                required
                value={appointment.price}
                onChange={(e) =>
                  setAppointment({
                    ...appointment,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={appointment.time}
                required
                onChange={(e) =>
                  setAppointment({
                    ...appointment,
                    time: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentForm;
