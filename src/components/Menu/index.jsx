import { Container, Row, Col, Table } from "react-bootstrap";
import "./style.css";
const Menu = ({ starters, mainCourses, deserts, drinks }) => {
  return (
    <div className="menu">
      <Container>
        <h1 className="text-center">Menu</h1>
        {starters.map((menu) => (
          <Row key={menu.id}>
            <h2 style={{ textAlign: "center" }}>{menu.menuName}</h2>
            <Col md={6}>
              <img src={menu.img} alt="menu-img" />
            </Col>
            <Col md={6}>
              <Table class="table">
                {menu.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </Table>
              <a href="" className="btn-menu">
                Selengkapnya
              </a>
            </Col>
          </Row>
        ))}
        {mainCourses.map((menu) => (
          <Row key={menu.id}>
            <h2 style={{ textAlign: "center" }}>{menu.menuName}</h2>
            <Col md={6} className="order-2 order-md-1">
              <Table class="table">
                {menu.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </Table>
              <a href="" className=" btn-menu">
                Selengkapnya
              </a>
            </Col>
            <Col md={6} className="order-1 order-md-2">
              <img src={menu.img} alt="menu-img" />
            </Col>
          </Row>
        ))}
        {deserts.map((menu) => (
          <Row key={menu.id}>
            <h2 style={{ textAlign: "center" }}>{menu.menuName}</h2>
            <Col md={6}>
              <img src={menu.img} alt="menu-img" />
            </Col>
            <Col md={6}>
              <Table>
                {menu.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </Table>
              <a href="" className="btn-menu">
                Selengkapnya
              </a>
            </Col>
          </Row>
        ))}
        {drinks.map((menu) => (
          <Row key={menu.id}>
            <h2 style={{ textAlign: "center" }}>{menu.menuName}</h2>
            <Col md={6} className="order-2 order-md-1">
              <Table class="table">
                {menu.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </Table>
              <a href="" className=" btn-menu">
                Selengkapnya
              </a>
            </Col>
            <Col md={6} className="order-1 order-md-2">
              <img src={menu.img} className="order-1 order-md-2" alt="menu-img" />
            </Col>
          </Row>
        ))}
        <div className="delivery">
          <a
            href="https://wa.me/123456789?text=Hallo%2C%20saya%20mau%20pesan....."
            className="btn-menu"
          >
            Delivery
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
