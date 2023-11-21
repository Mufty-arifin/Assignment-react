import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/img/herro-bg.jpg";
import "./style.css"
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md={6} className="order-2 order-md-1">
           <h1>Healthy Eating is important part of lifestyle</h1>
              <button
                type="button"
                className="btn btn-light mt-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book Now
              </button>
          </Col>
          <Col md={6} className="order-1 order-md-2">
          <img src={img1} className="img-fluid" alt="hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
