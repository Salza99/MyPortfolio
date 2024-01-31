import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
const Topbar = ({ page }) => {
  const [showTotalNavbar, setShowTotalNavbar] = useState(true);
  const windowX = window.innerWidth;
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (windowX < 500) {
        setShowTotalNavbar(false);
      } else {
        setShowTotalNavbar(true);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [windowX]);
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
        <Navbar.Brand>
          <img style={{ width: "50px", height: "50px" }} src={logo} alt="my-logo" />
        </Navbar.Brand>
        {showTotalNavbar && (
          <Nav>
            <Nav.Link className={page === "HOME" ? "nav-select transition" : "nav-not-select transition"}>
              Home
            </Nav.Link>
            <Nav.Link className={page === "COMPETENCE" ? "nav-select transition" : "nav-not-select transition"}>
              Competenze
            </Nav.Link>
            <Nav.Link className={page === "PROJECT" ? "nav-select transition" : "nav-not-select transition"}>
              Progetti
            </Nav.Link>
            <Nav.Link className={page === "CONTACT" ? "nav-select transition" : "nav-not-select transition"}>
              Contatti
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
export default Topbar;
