import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

export default function About(){
 const {data:stories,loading,error}=useFetchData("/data/stories.json");
 return <div className="page">
  <section className="page-hero"><div className="container"><p className="eyebrow">About Sarva Kalyana Seva</p><h1>People first. <em>Service always.</em></h1><p>From a group-led idea to a growing community effort, Sarva Kalyana Seva is about turning compassion into practical support.</p></div></section>
  <section className="section"><div className="container about-intro">
    <div><img
  className="about-poster"
  src={`${import.meta.env.BASE_URL}assets/about-poster.png`}
  alt="Sarvakalyana Seva organisation poster"
/></div>
    <div><p className="eyebrow">Our story</p><h2>Every small effort counts.</h2>
      <p>Sarvakalyana Seva is a page and community initiative opened by members of our group to help people who need a helping hand. We believe service can begin with something as simple as sharing food, spending time with students, contributing useful resources or connecting a person to support.</p>
      <p>Our school outreach has reached <strong>10–15 schools</strong> through programs designed to encourage students and create positive community experiences. Alongside school activities, we provide food support for people in need around temples and community spaces.</p>
      <p>The goal is simple: serve with compassion, protect dignity and make it easier for people to contribute.</p>
    </div>
  </div></section>
  <section className="section soft"><div className="container"><div className="section-head"><div><p className="eyebrow">Our values</p><h2>What guides every activity.</h2></div></div>
    <div className="values-grid"><article><b>01</b><h3>Compassion</h3><p>We see the person before the problem and serve with empathy.</p></article><article><b>02</b><h3>Dignity</h3><p>Support should feel respectful, warm and human—not transactional.</p></article><article><b>03</b><h3>Responsibility</h3><p>We aim to use every contribution thoughtfully and purposefully.</p></article><article><b>04</b><h3>Togetherness</h3><p>Real community change grows when volunteers, schools and supporters participate together.</p></article></div>
  </div></section>
  <section className="section"><div className="container"><div className="quote-card"><span>“</span><blockquote>From celebration to contribution — let every good moment become a chance to help someone else.</blockquote><small>— Sarva Kalyana Seva</small></div></div></section>
  <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">API integration</p><h2>Stories from our work.</h2></div></div>{error&&<p className="error">{error}</p>}{loading?<p>Loading…</p>:<div className="story-grid">{stories.map(s=><article className="story-card" key={s.id}><span>{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>}</div></section>
  <section className="container banner-image"><img
  src={`${import.meta.env.BASE_URL}assets/kalaprerna.png`}
  alt="Kalaprerna inter-school art competition"
/></section>
  <div className="container centered-action"><Link className="btn primary" to="/join-us">Join our community →</Link></div>
 </div>
}
