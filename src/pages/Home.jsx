import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import useFetchData from "../hooks/useFetchData";

const services = [
 {slug:"annadana",icon:"🍚",label:"Nourishment",title:"Annadana Seva",description:"Sharing food with people in need around temples and community spaces."},
 {slug:"education",icon:"📚",label:"Young minds",title:"School Seva",description:"Programs in schools that encourage learning, creativity, values and confidence."},
 {slug:"health",icon:"🩺",label:"Well-being",title:"Health Support",description:"Community-focused awareness and support that puts people first."},
 {slug:"community",icon:"🤝",label:"Helping hands",title:"Social Welfare",description:"Connecting contributions, volunteers and practical help with real needs."}
];

export default function Home(){
 const [visible,setVisible]=useState(false);
 const {data:stories,loading}=useFetchData("/data/stories.json");
 useEffect(()=>{const t=setTimeout(()=>setVisible(true),80);return()=>clearTimeout(t)},[]);
 return <div>
  <section className={`hero ${visible?"show":""}`}>
   <div className="container hero-grid">
    <div className="hero-copy-wrap">
      <span className="pill">🌿 From Celebration to Contribution</span>
      <h1>Feeding <em>hope.</em><br/>Sharing humanity.</h1>
      <p className="lead">Sarva Kalyana Seva is a community initiative created by a group of people who believe that every celebration can become an opportunity to care, every contribution can become a helping hand, and every small effort can matter.</p>
      <div className="actions"><Link className="btn primary" to="/join-us">Join the Seva</Link><Link className="btn secondary" to="/services">Explore Our Work</Link></div>
      <a className="insta-link" href="https://www.instagram.com/sarvakalyana_seva_kalaburgi" target="_blank" rel="noreferrer">◎ Follow our journey on Instagram ↗</a>
    </div>
    <div className="hero-poster">
      <img
  src={`${import.meta.env.BASE_URL}assets/feeding-hope.png`}
  alt="Sarva Kalyana Seva feeding hope poster"
/>
      <div className="hero-badge"><strong>Every small effort counts.</strong><span>Every helping hand matters.</span></div>
    </div>
   </div>
  </section>

  <section className="statement"><div className="container statement-grid">
   <div><p className="eyebrow">Who we are</p><h2>A helping hand, wherever it is needed.</h2></div>
   <p>We support people through food seva, school programs, health and social-welfare activities. Our work is rooted in compassion, dignity and community participation.</p>
  </div></section>

  <section className="section"><div className="container">
   <div className="section-head"><div><p className="eyebrow">What we do</p><h2>Service with a human touch.</h2></div><Link className="text-link" to="/services">See all seva →</Link></div>
   <div className="grid-2">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div>
  </div></section>

  <section className="impact-band"><div className="container">
   <div className="section-head"><div><p className="eyebrow">Our contribution</p><h2>Small acts. Real community moments.</h2></div></div>
   <div className="impact-grid">
    <div className="impact-number"><strong>10–15</strong><span>schools reached through programs</span></div>
    <div className="impact-number"><strong>Food</strong><span>shared with people in need around temples & community spaces</span></div>
    <div className="impact-number"><strong>Many</strong><span>ways to contribute: time, food, skills, resources & care</span></div>
   </div>
  </div></section>

  <section className="section"><div className="container two-col">
   <div className="poster-card">
  <img
    src={`${import.meta.env.BASE_URL}assets/about-poster.png`}
    alt="Sarvakalyana Seva mission poster"
  /></div>
   <div className="story-copy"><p className="eyebrow">The spirit behind SKS</p><h2>“Together, we can make a difference.”</h2>
   <p>Our aim is not to simply give. It is to listen, understand a need, bring people together and respond with care.</p>
   <ul className="check-list"><li>Education & school outreach</li><li>Food seva and nourishment</li><li>Health & social welfare initiatives</li><li>Volunteer and community participation</li></ul>
   <Link className="btn primary" to="/about">Read our story</Link></div>
  </div></section>

  <section className="section soft"><div className="container"><div className="section-head"><div><p className="eyebrow">From our work</p><h2>What contribution can create.</h2></div></div>
   {loading ? <div className="loading">Loading community stories…</div> : <div className="story-grid">{stories.map(s=><article className="story-card" key={s.id}><span>{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>}
  </div></section>

  <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">Be the change</p><h2>From celebration to contribution.</h2><p>Want to volunteer, donate food or resources, support a school program, or simply help spread the word?</p></div><Link className="btn light" to="/join-us">I want to help →</Link></div></section>
 </div>
}
