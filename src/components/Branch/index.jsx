import { Container, Carousel } from "react-bootstrap";
import "./style.css";
const Branch = ({ branch }) => {
  return (
    <div className="branch">
      <Container>
        <h1>Cabang Kami</h1>
        <Carousel>
          {branch.map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.img} alt="branch-img" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>
                  {item.address}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Branch;
