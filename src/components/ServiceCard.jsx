import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  return <Link to={`/services/${service.slug}`} className="service-card">
    <div className="service-icon">{service.icon}</div>
    <div><span className="eyebrow">{service.label}</span><h3>{service.title}</h3><p>{service.description}</p></div>
    <span className="arrow">↗</span>
  </Link>;
}
