import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Career Goals",
  description:
    "Career goals page describing short-term, one-year, and five-year goals.",
};

const goalReferences = [
  references.kiesslingFabry2021,
  references.nguyen2021,
  references.kelleyKelley2013,
];

const goals = [
  {
    horizon: "Short-term",
    detail:
      "Complete the degree program strongly and continue strengthening data analysis, communication, and compliance-focused leadership skills.",
  },
  {
    horizon: "One year",
    detail:
      "Move into a role that uses operational analysis, reporting, or process improvement within a healthcare-related environment.",
  },
  {
    horizon: "Five years",
    detail:
      "Advance into strategic operational leadership where I can guide data-informed decisions, ethical communication, and system-level improvement.",
  },
];

const skillsDashboard = [
  ["Effective communication", "Stakeholder briefings and policy translation"],
  ["Digital literacy", "Source evaluation and evidence-based reporting"],
  ["Problem solving", "Process improvement and root cause analysis"],
  ["Leadership application", "Operational decisions with measurable review"],
];

export default function CareerGoalsPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Career Goals
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          My career path is centered on ethical operational leadership supported
          by strong communication and responsible use of data.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          I want to build a professional trajectory that moves from analysis and
          operational coordination into leadership roles where I can improve
          systems, communicate evidence clearly, and help organizations make
          better decisions.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <Card eyebrow="Career Path" title="Direction of growth">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Data Analyst",
              "Operations Manager",
              "Analytics Manager",
              "Strategic Consultant",
            ].map((role, index) => (
              <article
                key={role}
                className="rounded-[1.35rem] border border-line bg-white/75 p-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                  Stage {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{role}</h3>
              </article>
            ))}
          </div>
        </Card>

        <Card eyebrow="Professional Specialization" title="Where I want to contribute">
          <p className="text-sm leading-7 text-muted">
            My preferred direction is operational leadership in settings where
            data quality, regulatory accountability, and communication quality
            directly affect performance. Healthcare operations, compliance
            support, and analytics-informed management all align with that
            vision.
          </p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {goals.map((goal) => (
          <Card key={goal.horizon} eyebrow={goal.horizon} title={goal.horizon}>
            <p className="text-sm leading-7 text-muted">{goal.detail}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card eyebrow="Skills Dashboard" title="How program learning supports my goals">
          <div className="space-y-3">
            {skillsDashboard.map(([outcome, competency]) => (
              <div
                key={outcome}
                className="flex flex-col gap-1 rounded-[1.35rem] border border-line bg-white/75 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="font-semibold text-ink">{outcome}</p>
                <p className="text-sm text-muted">{competency}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card eyebrow="Action Plan" title="How I will move toward these goals">
          <ul className="space-y-3 text-sm leading-7 text-muted">
            <li>Complete the degree with a portfolio that clearly shows competency growth.</li>
            <li>Pursue opportunities involving reporting, operations, or compliance analysis.</li>
            <li>Strengthen dashboard and data visualization skills through continued practice.</li>
            <li>Seek roles that let me connect evidence, communication, and leadership decisions.</li>
          </ul>
        </Card>
      </section>

      <ReferenceList references={goalReferences} />
    </div>
  );
}
