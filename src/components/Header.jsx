import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../context/Context";

function Header() {
  const { user } = useContext(Context);
  return (
    <Navbar className="bg-body-tertiary p-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-1">
          Movie App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome <span className="text-white">{user.userName}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
