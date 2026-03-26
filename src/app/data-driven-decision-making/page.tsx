import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Data-Driven Decision-Making in Operational Leadership",
  description:
    "Area of concentration 1 focused on data-driven decision-making in operational leadership.",
};

const areaOneReferences = [
  references.kiesslingFabry2021,
  references.millerBains2022,
  references.nguyen2021,
  references.pewResearch2021,
];

const bars = [
  { label: "Safety", value: 82 },
  { label: "Quality", value: 74 },
  { label: "Cost", value: 67 },
  { label: "Access", value: 88 },
];

export default function DataDrivenDecisionMakingPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Area of Concentration 1
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          Data-driven decision-making in operational leadership requires both
          evidence and judgment.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          This concentration focuses on how leaders gather data, evaluate
          significance, communicate options, make decisions, and review results.
          The process is not only analytical. It also depends on digital
          literacy, ethical interpretation, and the discipline to revisit a
          decision after implementation.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card eyebrow="Frameworks" title="Decision-making model">
          <div className="space-y-4">
            {[
              "Identify the operational question.",
              "Collect relevant and credible data.",
              "Interpret trends, risks, and tradeoffs.",
              "Communicate options to stakeholders.",
              "Implement the decision and monitor outcomes.",
              "Refine the process through continuous improvement.",
            ].map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[1.35rem] border border-line bg-white/75 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-blue text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-7 text-muted">{step}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card eyebrow="Real-World Application" title="Operational dashboard mockup">
          <div className="rounded-[1.5rem] border border-line bg-[#f7f3ed] p-5">
            <div className="grid gap-4 sm:grid-cols-4">
              {bars.map((bar) => (
                <div key={bar.label} className="text-center">
                  <div className="flex h-56 items-end justify-center rounded-[1.2rem] border border-line bg-white p-3">
                    <div
                      className="w-full rounded-t-[1rem] bg-deep-blue"
                      style={{ height: `${bar.value}%` }}
                    />
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {bar.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              A simple performance dashboard like this helps an operational
              leader compare domains, identify where action is needed, and frame
              decisions transparently.
            </p>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card eyebrow="Leadership Reflection" title="What this concentration taught me">
          <p className="text-sm leading-7 text-muted">
            I learned that data-driven leadership is strongest when evidence is
            interpreted cautiously and paired with context. Dashboards and
            visualizations are useful only when the leader can explain what the
            numbers mean, what they do not mean, and what action should follow.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            This concentration also reinforced the importance of detecting bias,
            checking assumptions, and monitoring outcomes after a decision is
            made rather than treating the decision itself as the endpoint.
          </p>
        </Card>

        <Card eyebrow="Application" title="How I will use this professionally">
          <ul className="space-y-3 text-sm leading-7 text-muted">
            <li>Build clearer dashboards for operational review meetings.</li>
            <li>Frame recommendations around risk, quality, and feasibility.</li>
            <li>Evaluate whether a decision improved the intended outcome.</li>
            <li>Use data ethically by exposing limitations and possible bias.</li>
          </ul>
        </Card>
      </section>

      <ReferenceList references={areaOneReferences} />
    </div>
  );
}
