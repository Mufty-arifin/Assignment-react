import { Container, Row, Col, Card } from "react-bootstrap";
import img2 from "../../assets/img/bg-about.jpg";
import "./style.css";
const About = ({ aboutCard }) => {
  return (
    <div className="about">
      <Container>
        <h1 className="text-center">About</h1>
        <Row>
          <Col md={6}>
            <img src={img2} className="img-fluid" alt="hero-img" />
          </Col>
          <Col md={6}>
            <h2>Kenapa Memilih Restorant Kami?</h2>
            <p>
              Kami adalah restoran yang menghadirkan pengalaman kuliner tak
              terlupakan. Dari bahan-bahan berkualitas tinggi hingga
              tangan-tangan kreatif kami, setiap hidangan di sini adalah hasil
              perpaduan sempurna.
            </p>
            <p>
              Mengapa memilih Dapur Lezat? Karena kami mengutamakan kualitas dan
              kepuasan pelanggan. Setiap hidangan kami adalah karya seni yang
              diciptakan untuk memanjakan selera Anda.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 d-flex">
          {aboutCard.map((card) => (
            <Col key={card.id} md={4}>
              <Card  style={{ border: "none" }}>
                <div className="circle">
                  <img style={{width: "50px", height: "50px"}} src={card.img} alt="card-img" />
                </div>
                <h4 className="mt-4">{card.title}</h4>
                <p>{card.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default About;
