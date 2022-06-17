import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Carousel,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpg";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Wallpaper design</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"500px"}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"500px"}
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"500px"}
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Wallpaper features</Card.Title>
                  <Card.Text>
                    {" "}
                    Wallpaper features can be used to create a designed look in
                    any space, and can also be applied to only one wall as a
                    distinctive wall that wallpaper can provide you with 2021.
                    Beautiful designs, fun tissues and beautiful prints affect
                    the décor of the room. Wallpaper sticks easily and smoothly
                    to the walls, hiding many surface defects
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>phone</Form.Label>
              <Form.Control type="phone_numper" placeholder="phone_numper" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>address</Form.Label>
              <Form.Control type="address" placeholder="address" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsubject">
              <Form.Label>subject</Form.Label>
              <Form.Control type="" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="footer">
          <footer className="page-footer font-small blue pt-4 footer1">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Company Information</h5>
                  <p>
                    About Xi An Contact us Be our members. Fashion Blog Social
                    responsibility
                  </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Contact Us</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">
                        Email address : anasnabilghariani@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#!">Phone Number : 00218924010030</a>
                    </li>
                    <li>
                      <a href="#!">Other phone_numper : 00218914010030</a>
                    </li>
                    <li>
                      <a href="#!">Address : Aluwaina-tunes</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">link</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram-square"></i>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-copyright text-center py-3">
              © 2022 Copyright:
              <a href="#"> wallpaper.com</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
