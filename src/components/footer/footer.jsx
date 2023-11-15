import "./footer.css";
import Linkedin from "../../assets/img/200px-Linkedin.svg.png";
import Github from "../../assets/img/github-mark-white.svg";

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/erkebulan-ualikhan-4b79a1295/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/erkosha13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub" />
        </a>
      </div>

      <div className="footer__text">
        <h1>by Erkosha13</h1>
      </div>
    </div>
  );
};

export default Footer;
