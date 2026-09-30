import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/assets/sks-logo.png" alt="SKS logo" />
            <div><strong>Sarva Kalyana Seva</strong><span>Serving with compassion</span></div>
          </div>
          <p>Feeding hope. Sharing humanity. Turning celebrations and contributions into meaningful support for people and communities.</p>
        </div>
        <div><h4>Explore</h4><Link to="/about">Our story</Link><Link to="/services">Our seva</Link><Link to="/events">Programs</Link><Link to="/gallery">Gallery</Link></div>
        <div><h4>Get involved</h4><Link to="/join-us">Volunteer / Contribute</Link><a href="tel:8088307288">8088307288</a><a href="mailto:sarvakalyana.seva@gmail.com">Email us</a></div>
        <div><h4>Connect</h4><a href="https://www.instagram.com/sarvakalyana_seva_kalaburgi" target="_blank" rel="noreferrer">Instagram ↗</a><p>Kalaburagi, Karnataka</p></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Sarva Kalyana Seva · Built with purpose and community.</div>
    </footer>
  );
}
