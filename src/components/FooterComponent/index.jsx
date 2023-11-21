import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
const FooterComponent = ({ brand, openTime, contact, credit }) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h2>{brand}</h2>
            {openTime.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.day}</p>
                {item.time.map((data) => (
                  <p key={data.id}>
                    {data.eatingTime} <br />
                    {data.time}
                  </p>
                ))}
              </div>
            ))}
          </Col>
          <Col md={4}>
            {contact.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>
                  {item.phone}
                  <br />
                  {item.email}
                </p>
                <p>
                  {item.street} <br />
                  {item.address}
                </p>
              </div>
            ))}
          </Col>
          <Col md={4} className="subs">
            <h2>Never Miss a Recipe</h2>
            <form action="">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email adress"
              />
              <button className="btn btn-subs">Subscribe</button>
            </form>
            <p>Join our subscribers and get best recipe delivered each week!</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <div className="credit text-center">
          <p>{credit}</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
