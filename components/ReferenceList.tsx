interface ReferenceListProps {
  references: string[];
}

export function ReferenceList({ references }: ReferenceListProps) {
  return (
    <section className="glass-panel rounded-[0.9rem] p-6 sm:p-7">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
        References
      </p>
      <div className="space-y-4 text-sm leading-7 text-muted">
        {references.map((reference) => (
          <p key={reference} className="pl-4 -indent-4">
            {reference}
          </p>
        ))}
      </div>
    </section>
  );
}
