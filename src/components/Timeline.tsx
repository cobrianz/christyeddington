interface TimelineItem {
  title: string;
  description: string;
  period: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="relative">
            <div className="mb-4 hidden h-3 w-3 rounded-full border-2 border-clay bg-cream md:block" />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              {item.period}
            </p>
            <h3 className="mb-2 text-2xl font-semibold text-ink">{item.title}</h3>
            <p className="text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
