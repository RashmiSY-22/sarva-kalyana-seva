import { Link, useParams } from "react-router-dom";
import { services } from "./Services";
export default function ServiceDetails(){
 const {slug}=useParams(); const service=services.find(s=>s.slug===slug);
 if(!service) return <div className="empty"><h2>Seva not found</h2><Link to="/services">Back to services</Link></div>;
 const details={
  annadana:"We believe food is one of the simplest and most direct ways to care. Contributions such as rice, dal, cooking oil, spices, vegetables and groceries can become meals shared with people who need support.",
  education:"School programs create opportunities to encourage young minds. Our work includes engaging activities, awareness, creativity and support that helps students feel seen and motivated.",
  health:"Health-related community support focuses on awareness, care and connecting people with helpful resources in a respectful way.",
  community:"Social welfare is about the helping hand behind every activity—volunteers, contributors, organisers and community members working together."
 };
 return <article className="detail-card"><div className="detail-icon">{service.icon}</div><div><span className="eyebrow">{service.label}</span><h2>{service.title}</h2><p>{details[slug]}</p><p>Want to contribute? You can offer time, resources, skills or financial support according to your capacity.</p><Link className="btn primary" to="/join-us">Join / Contribute →</Link></div></article>;
}
