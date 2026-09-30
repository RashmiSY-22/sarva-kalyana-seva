import { Link } from "react-router-dom";
export default function NotFound(){return <div className="empty-page"><span>404</span><h1>Page not found.</h1><p>Let's take you back to the seva.</p><Link className="btn primary" to="/">Go home</Link></div>}
