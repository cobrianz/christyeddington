import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Innovative Problem Solving",
  description:
    "Innovative problem solving page showing frameworks, reflection, and application.",
};

const innovationReferences = [
  references.kelleyKelley2013,
  references.kiesslingFabry2021,
  references.millerBains2022,
  references.nguyen2021,
  references.pewResearch2021,
];

const processSteps = [
  "Define",
  "Analyze",
  "Generate",
  "Test",
  "Evaluate",
];

export default function InnovativeProblemSolvingPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Innovative Problem Solving
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          Creative problem solving becomes valuable when it is rigorous,
          ethical, and measurable.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          This competency connects directly to the program outcomes of critical
          analysis, creative problem-solving, and innovative decision-making. I
          learned that innovation is not improvisation alone; it is a structured
          process that still respects evidence, risk, and implementation
          realities.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <Card eyebrow="Program Alignment" title="What I learned">
          <ul className="space-y-3 text-sm leading-7 text-muted">
            <li>Root cause analysis prevents teams from solving the wrong problem.</li>
            <li>Creativity improves when multiple perspectives are invited early.</li>
            <li>Data strengthens innovation when it tests assumptions instead of justifying them.</li>
            <li>Ethics matter because an efficient solution can still be harmful.</li>
          </ul>
        </Card>

        <Card eyebrow="Creative Process" title="My problem-solving flow">
          <div className="grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[1.35rem] border border-line bg-white/75 p-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{step}</h3>
              </article>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card eyebrow="Evaluation" title="How I judge whether a solution works">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Measurable impact</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Improvement should be visible in outcomes such as timeliness,
                consistency, error reduction, or stakeholder satisfaction.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Ethical alignment</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                The solution should support fairness, transparency, and informed
                decision-making.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Usability</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                A strong solution must be realistic for the people who will use
                and maintain it.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Learning value</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Post-implementation review should reveal what to refine next.
              </p>
            </article>
          </div>
        </Card>

        <Card eyebrow="Reflection" title="Professional application and next steps">
          <p className="text-sm leading-7 text-muted">
            In professional practice, I can apply this competency by identifying
            process breakdowns, building options with evidence, and presenting a
            recommendation that balances speed, compliance, and impact.
          </p>
          <div className="mt-5 grid gap-4">
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Gap</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I want more experience prototyping and testing solutions with
                data before full rollout.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Development plan</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I plan to use small pilot designs, collect user feedback, and
                compare outcomes against defined success criteria.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <ReferenceList references={innovationReferences} />
    </div>
  );
}
