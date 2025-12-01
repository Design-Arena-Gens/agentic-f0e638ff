export default function Reading({ reading }) {
  if (!reading) return null;
  const { headline, summary, windows, guidance } = reading;
  return (
    <div className="card">
      <h2>{headline}</h2>
      <p>{summary}</p>

      <h3>Breakthrough Windows</h3>
      <ul>
        {windows.map((w) => (
          <li key={w.label}>
            <strong>{w.label}:</strong> <span className="date">{w.range}</span>
            {w.focus ? <span className="badge">{w.focus}</span> : null}
          </li>
        ))}
      </ul>

      <h3>Practical Guidance</h3>
      <ul>
        {guidance.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
