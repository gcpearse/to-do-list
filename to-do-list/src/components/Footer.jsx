const Footer = () => {
  return (
    <footer>
      <button className="footer-button" id="help-button">Help</button>
      <button className="footer-button" id="back-to-top-button" onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>Back to top</button>
    </footer>
  );
};

export default Footer;
