const Footer = () => {
  return (
    <footer>
      <button className="footer-button" id="scroll-down-button" onClick={() => {
        const form = document.getElementById("task-input-form");
        form.scrollIntoView({ behavior: "smooth" });
      }}>Add tasks</button>
      <button className="footer-button" id="scroll-up-button" onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>Back to top</button>
    </footer>
  );
};

export default Footer;
