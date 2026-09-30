import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, deleteEvent, updateEvent } from "../redux/eventSlice";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard";

export default function Events(){
 const events=useSelector(s=>s.events), dispatch=useDispatch();
 const [params,setParams]=useSearchParams(); const [manager,setManager]=useState(false);
 const category=params.get("category")||"All";
 const filtered=useMemo(()=>category==="All"?events:events.filter(e=>e.category===category),[events,category]);
 const [form,setForm]=useState({title:"",date:"",location:"Kalaburagi",category:"Community",description:""});
 const submit=e=>{e.preventDefault(); if(!form.title||!form.date||!form.description)return; dispatch(addEvent(form)); setForm({title:"",date:"",location:"Kalaburagi",category:"Community",description:""});};
 const setCat=e=>e.target.value==="All"?setParams({}):setParams({category:e.target.value});
 return <div className="page"><section className="page-hero"><div className="container"><p className="eyebrow">Programs & activities</p><h1>Moments that bring us <em>together.</em></h1><p>Explore school programs, food seva, community activities and initiatives that turn contribution into action.</p></div></section>
 <div className="container toolbar"><select value={category} onChange={setCat}><option>All</option><option>Annadana</option><option>Education</option><option>Health</option><option>Community</option></select><button className="btn secondary" onClick={()=>setManager(v=>!v)}>{manager?"Close":"Open"} management demo</button></div>
 <div className="container events-grid">{filtered.map(e=><EventCard key={e.id} event={e} admin={manager} onDelete={id=>dispatch(deleteEvent(id))} onEdit={event=>{const title=window.prompt("Update event title",event.title); if(title?.trim())dispatch(updateEvent({id:event.id,title:title.trim()}));}}/>)}</div>
 {manager&&<section className="container admin-panel"><p className="eyebrow">Redux Toolkit · CRUD</p><h2>Manage program cards</h2><p className="muted">This demonstration covers Create, Read, Update and Delete using Redux state.</p><form className="event-form" onSubmit={submit}>
 <input required placeholder="Program title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/><input required placeholder="Date / schedule" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/><input placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/><select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option>Community</option><option>Annadana</option><option>Education</option><option>Health</option></select><textarea required placeholder="Short description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/><button className="btn primary">Create program</button></form></section>}
 </div>
}
