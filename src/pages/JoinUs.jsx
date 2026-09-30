import { useReducer, useRef, useState } from "react";

const initial={name:"",email:"",phone:"",city:"",interest:"",contribution:"",message:"",agree:false};
function reducer(state,action){
 if(action.type==="field")return {...state,[action.name]:action.value};
 if(action.type==="reset")return initial;
 return state;
}
function validate(s){
 const e={};
 if(!s.name.trim())e.name="Please enter your name.";
 if(!/^\S+@\S+\.\S+$/.test(s.email))e.email="Enter a valid email.";
 if(!/^\d{10}$/.test(s.phone.replace(/\D/g,"")))e.phone="Enter a 10-digit phone number.";
 if(!s.interest)e.interest="Choose how you want to help.";
 if(!s.contribution)e.contribution="Choose a contribution type.";
 if(!s.agree)e.agree="Please confirm your interest.";
 return e;
}
export default function JoinUs(){
 const [state,dispatch]=useReducer(reducer,initial); const [errors,setErrors]=useState({}); const [submitted,setSubmitted]=useState(false); const firstRef=useRef(null);
 const submit=e=>{e.preventDefault();const next=validate(state);setErrors(next);if(Object.keys(next).length){firstRef.current?.focus();return;}setSubmitted(true);dispatch({type:"reset"});setTimeout(()=>setSubmitted(false),6000);};
 const field=(name,value)=>dispatch({type:"field",name,value});
 return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Join the seva</p><h1>Your time, care or contribution can become a <em>helping hand.</em></h1><p>Tell us how you would like to participate. A team member can connect with you about suitable activities.</p></div></section>
 <section className="section pt-20"><div className="container join-grid">
  <form className="join-form card" onSubmit={submit} noValidate><div className="form-title"><p className="eyebrow">Volunteer / contributor form</p><h2>Let’s serve together.</h2><p>All fields marked below help us understand how to involve you.</p></div>
   <div className="form-grid"><label>Full name *<input ref={firstRef} value={state.name} onChange={e=>field("name",e.target.value)} placeholder="Your name"/>{errors.name&&<small className="field-error">{errors.name}</small>}</label>
   <label>Email *<input type="email" value={state.email} onChange={e=>field("email",e.target.value)} placeholder="you@example.com"/>{errors.email&&<small className="field-error">{errors.email}</small>}</label>
   <label>Phone *<input value={state.phone} onChange={e=>field("phone",e.target.value)} placeholder="10-digit number"/>{errors.phone&&<small className="field-error">{errors.phone}</small>}</label>
   <label>City / area<input value={state.city} onChange={e=>field("city",e.target.value)} placeholder="Kalaburagi / Bengaluru / ..."/></label>
   <label>How would you like to help? *<select value={state.interest} onChange={e=>field("interest",e.target.value)}><option value="">Select</option><option>Volunteer in programs</option><option>Support school activities</option><option>Help with food seva</option><option>Organise / partner</option><option>Spread awareness</option></select>{errors.interest&&<small className="field-error">{errors.interest}</small>}</label>
   <label>What can you contribute? *<select value={state.contribution} onChange={e=>field("contribution",e.target.value)}><option value="">Select</option><option>Time</option><option>Food / groceries</option><option>Educational materials</option><option>Skills / expertise</option><option>Financial support</option><option>Other resources</option></select>{errors.contribution&&<small className="field-error">{errors.contribution}</small>}</label></div>
   <label>Message / idea<textarea value={state.message} onChange={e=>field("message",e.target.value)} placeholder="Tell us about your idea or availability…"/></label>
   <label className="checkbox"><input type="checkbox" checked={state.agree} onChange={e=>field("agree",e.target.checked)}/><span>I would like to be contacted regarding Sarva Kalyana Seva activities.</span></label>{errors.agree&&<small className="field-error">{errors.agree}</small>}
   <button className="btn primary" type="submit">Submit my interest →</button>{submitted&&<div className="success">Thank you. Your interest has been recorded for this demo form. We’ll connect with you through the details provided.</div>}
  </form>
  <aside className="join-aside"><img
  src={`${import.meta.env.BASE_URL}assets/feeding-hope.png`}
  alt="Feeding Hope poster"
/><div className="contact-strip"><strong>Prefer to connect directly?</strong><a href="tel:8088307288">☎ 8088307288</a><a href="mailto:sarvakalyana.seva@gmail.com">✉ sarvakalyana.seva@gmail.com</a></div><a className="btn secondary full" href="https://www.instagram.com/sarvakalyana_seva_kalaburgi" target="_blank" rel="noreferrer">Connect on Instagram ↗</a></aside>
 </div></section></div>
}
