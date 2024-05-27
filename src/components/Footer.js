import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p>Copyright</p>
      <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
      <p> {currentYear}</p>
    </footer>
  );
};

export default Footer;
