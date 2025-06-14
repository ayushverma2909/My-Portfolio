import "./Footer.css";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <p> © {year} Copyright</p>
        <p>Designed and Developed by Ayush Verma</p>
      </div>

      <div className="footer-right">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
