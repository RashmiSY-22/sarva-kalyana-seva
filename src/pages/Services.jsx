import { Outlet, NavLink } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export const services=[
 {slug:"annadana",icon:"🍚",label:"Nourishment",title:"Annadana Seva",description:"Food support for people in need around temples and community spaces."},
 {slug:"education",icon:"📚",label:"Young minds",title:"School Seva",description:"Programs in schools that encourage learning, creativity, values and confidence."},
 {slug:"health",icon:"🩺",label:"Well-being",title:"Health Support",description:"Community-focused awareness and support that puts people first."},
 {slug:"community",icon:"🤝",label:"Helping hands",title:"Social Welfare",description:"Connecting contributions, volunteers and practical help with real needs."}
];

export default function Services(){
 return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Our seva</p><h1>Ways to turn kindness into <em>action.</em></h1><p>Choose a focus area to learn more. Every service is designed around practical help, dignity and community participation.</p></div></section>
 <div className="container service-tabs">{services.map(s=><NavLink key={s.slug} to={`/services/${s.slug}`}>{s.icon} {s.title}</NavLink>)}</div>
 <section className="section pt-30"><div className="container grid-2">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section>
 <section className="container nested-area"><Outlet/></section>
 </div>
}
