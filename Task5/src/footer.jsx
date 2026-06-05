import "./footerStyling.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="info-item">
          📍 <span>Chennai, Tamil Nadu, India</span>
        </div>

        <div className="info-item">
          📞 <span>+91 9876543210</span>
        </div>

        <div className="info-item">
          ✉️
          <a href="mailto:ztchads4311@gmail.com">vairavel.a2006@gmail.com</a>
        </div>
      </div>

      <div className="social-links">
        <a href="" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="" target="_blank" rel="noreferrer">
          X (Twitter)
        </a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Vairavel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
