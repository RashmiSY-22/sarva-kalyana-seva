export default function EventCard({ event, admin, onDelete, onEdit }) {
  return <article className="event-card">
    <span className="event-tag">{event.category}</span>
    <h3>{event.title}</h3><p>{event.description}</p>
    <div className="event-meta"><span>◷ {event.date}</span><span>⌖ {event.location}</span></div>
    {admin && <div className="admin-actions"><button onClick={() => onEdit(event)}>Edit</button><button onClick={() => onDelete(event.id)}>Delete</button></div>}
  </article>;
}
