import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, eyebrow, children, className = "" }: CardProps) => (
  <section className={`glass-panel rounded-[0.9rem] p-6 sm:p-7 ${className}`}>
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
        {eyebrow}
      </p>
    ) : null}
    {title ? (
      <h3 className="mb-4 text-2xl font-semibold text-ink">{title}</h3>
    ) : null}
    {children}
  </section>
);
