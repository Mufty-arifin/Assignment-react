import "./style.css";
import { Container } from "react-bootstrap";
const Header = ({ headerContact }) => {
  return (
    <div className="header">
      <Container>
        <div className="header-contact">
          {headerContact.map((contact, index) => (
            <div key={index}>
              <p>{contact}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
