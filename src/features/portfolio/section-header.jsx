export function SectionHeader({ eyebrow, title, lead }) {
  return (
    <div className="w-full mb-14">
      <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h2>
      {lead ? <p className="text-muted-foreground text-lg leading-relaxed">{lead}</p> : null}
    </div>
  );
}
