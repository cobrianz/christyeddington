import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Digital Literacy and Data Analysis",
  description:
    "Digital literacy and data analysis portfolio page with APA references.",
};

const digitalReferences = [
  references.kiesslingFabry2021,
  references.millerBains2022,
  references.nguyen2021,
];

export default function DigitalLiteracyPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Digital Literacy and Data Analysis
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          Digital literacy is the disciplined ability to evaluate information,
          analyze evidence, and use data ethically.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          My understanding of digital literacy extends beyond technical fluency.
          It includes credibility checks, bias awareness, source comparison,
          responsible synthesis, and chart choices that preserve meaning instead
          of distorting it.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <Card eyebrow="Source Evaluation" title="How I assess digital information">
          <div className="grid gap-4">
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">SIFT mindset</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I pause before sharing, investigate the source, find better
                coverage, and trace claims back to original evidence.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Bias detection</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I compare framing, missing context, and selective evidence to
                determine whether a source informs or steers interpretation.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Ethical use</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Responsible use of information means citing sources clearly,
                respecting privacy, and avoiding misleading simplification.
              </p>
            </article>
          </div>
        </Card>

        <Card eyebrow="Data Analysis" title="How I turn information into insight">
          <div className="space-y-5">
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Chart selection</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I choose visuals based on what the audience needs to compare:
                trend, proportion, ranking, or change over time.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                Trend interpretation
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                A pattern only becomes useful when it is paired with context,
                limitations, and implications for decision-making.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-line bg-[#f7f3ed] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                Visual Example
              </p>
              <div className="mt-4 flex h-48 items-end gap-4 rounded-[1.2rem] border border-line bg-white px-5 pb-5 pt-6">
                {[52, 68, 61, 79, 91].map((value, index) => (
                  <div key={value} className="flex flex-1 flex-col items-center gap-3">
                    <div
                      className={`w-full rounded-t-xl ${
                        index === 4 ? "bg-clay" : "bg-deep-blue/80"
                      }`}
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-xs uppercase tracking-[0.18em] text-muted">
                      Q{index + 1}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                This mock chart represents a clean, audience-ready summary of
                performance change over time.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card eyebrow="Priority" title="Most important concept">
          <p className="text-sm leading-7 text-muted">
            The most important concept is responsible interpretation. Data does
            not speak for itself; people assign meaning to it, and that process
            can either clarify or distort reality.
          </p>
        </Card>
        <Card eyebrow="Strength" title="Current capability">
          <p className="text-sm leading-7 text-muted">
            I am strongest when comparing sources, finding patterns, and
            translating complex information into practical summaries.
          </p>
        </Card>
        <Card eyebrow="Growth Area" title="Gap to address">
          <p className="text-sm leading-7 text-muted">
            I want deeper experience with advanced analytics tools so I can pair
            strong interpretation with stronger technical execution.
          </p>
        </Card>
      </section>

      <ReferenceList references={digitalReferences} />
    </div>
  );
}
