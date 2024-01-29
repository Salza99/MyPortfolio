import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../myAssets/logoportfolio.svg";

const Topbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const scrolled = window.screenY;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  const handleScroll = () => {
    setIsScroll(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScroll(false);
    }, 200);
  };
  return (
    <Navbar className={isScroll ? "border-navbar border-on-scroll" : "border-navbar"} data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav>
          <Nav.Link className="nav-select">Home</Nav.Link>
          <Nav.Link className="nav-select">Competenze</Nav.Link>
          <Nav.Link className="nav-select">Progetti</Nav.Link>
          <Nav.Link className="nav-select">Contatti</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Topbar;
