type Group = { eyebrow: string; heading: string; items: string[] };
export function ChecklistCard({ group }: { group: Group }) {
  return (
    <article className="checklist-card card">
      <span className="eyebrow muted">{group.eyebrow}</span>
      <h3>{group.heading}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>
            <span className="check-square" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
