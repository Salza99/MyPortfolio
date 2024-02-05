import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import logo from "../assets/logo.svg";
const Topbar = ({ page, lang }) => {
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
  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <Navbar className={isScroll ? "border-navbar border-on-scroll" : "border-navbar"} data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <img style={{ width: "50px", height: "50px" }} src={logo} alt="my-logo" />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <NavbarCollapse id="navbarScroll">
            <Nav navbarScroll>
              <p
                className={page === "HOME" ? "nav-select transition" : "nav-not-select transition"}
                onClick={() => scrollToSection("home")}
              >
                Home
              </p>
              <p
                className={page === "COMPETENCE" ? "nav-select transition" : "nav-not-select transition"}
                onClick={() => scrollToSection("competenze")}
              >
                {lang === "IT" ? "Competenze" : "Skills"}
              </p>
              <p
                className={page === "PROJECT" ? "nav-select transition" : "nav-not-select transition"}
                onClick={() => scrollToSection("progetti")}
              >
                {lang === "IT" ? "Progetti" : "Projects"}
              </p>
              <p
                className={page === "CONTACT" ? "nav-select transition" : "nav-not-select transition"}
                onClick={() => scrollToSection("contatti")}
              >
                {lang === "IT" ? "Contatti" : "Contacts"}
              </p>
            </Nav>
          </NavbarCollapse>
        </div>
      </Container>
    </Navbar>
  );
};
export default Topbar;
