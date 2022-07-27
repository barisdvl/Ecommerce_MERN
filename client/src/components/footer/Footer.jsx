import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-containerLeft">
          <h1 className="containerLeft-title">BD Store</h1>
          <p className="containerLeft-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
          <div className="containerLeft-appDownload">
            <img
              src="https://i.ibb.co/cX22G38/google-play.png"
              alt="google-play"
              className="appDownload-image"
            />

            <img
              src="https://i.ibb.co/N1cNZVq/app-store.png"
              alt="app-store"
              className="appDownload-image"
            />
          </div>
        </div>
        <div className="footer-containerRight">
          <Link className="containerRight-link" to={"/"}>
            Help Center
          </Link>
          <Link className="containerRight-link" to={"/"}>
            Track Your Order
          </Link>
          <Link className="containerRight-link" to={"/"}>
            Corporate / Bulk Purchasing
          </Link>
          <Link className="containerRight-link" to={"/"}>
            Return / Refunds
          </Link>
          <div className="containerRight-social">
            <Twitter className="containerRight-socialIcon"/>
            <Facebook className="containerRight-socialIcon"/>
            <Instagram className="containerRight-socialIcon"/>
            <YouTube className="containerRight-socialIcon"/>
            <Google className="containerRight-socialIcon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
