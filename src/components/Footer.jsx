
import { Flower2, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <Flower2 size={19} />
        Bloom & Co.
      </div>

      <p>
        Thoughtful flowers. Beautiful little moments.
      </p>

      <div className="footer-icons">
        <span>
          <Flower2 size={16} />
        </span>

        <span>
          <Mail size={16} />
        </span>
      </div>

      <small>
        © {new Date().getFullYear()} Bloom & Co.
        All blooms, all heart , Asma Zubairi "Frontend Developer"
      </small>

    </footer>
  );
}

export default Footer;
