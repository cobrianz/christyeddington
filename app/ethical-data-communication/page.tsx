import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ethical and Strategic Communication of Data in Operational Leadership",
  description:
    "Area of concentration 2 focused on ethical and strategic communication of data in operational leadership.",
};

const areaTwoReferences = [
  references.kiesslingFabry2021,
  references.millerBains2022,
  references.nguyen2021,
  references.pewResearch2021,
];

const heatMap = [
  ["High", "Medium", "Medium"],
  ["High", "High", "Medium"],
  ["Critical", "High", "Low"],
];

export default function EthicalDataCommunicationPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Area of Concentration 2
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          Strategic leadership depends on communicating data clearly, honestly,
          and in ways that guide action.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          This concentration emphasizes turning complex evidence into practical,
          ethical communication. The objective is not to make data sound more
          convincing. It is to make the meaning, limitations, and implications
          visible to the people making decisions.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <Card eyebrow="Major Lessons" title="What I took from this concentration">
          <div className="grid gap-4">
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                Data visualization integrity
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Visuals should reduce confusion without manipulating scale,
                emphasis, or context.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                Ethical interpretation and bias detection
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Strategic communication includes naming uncertainty and watching
                for assumptions that privilege convenience over truth.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                Communicative competence in leadership
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Leaders must explain why evidence matters and what response it
                reasonably supports.
              </p>
            </article>
          </div>
        </Card>

        <Card eyebrow="Visual Example" title="Risk heat map placeholder">
          <div className="rounded-[1.5rem] border border-line bg-[#f7f3ed] p-5">
            <div className="grid grid-cols-3 gap-3">
              {heatMap.flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) => {
                  const tone =
                    cell === "Critical"
                      ? "bg-clay text-white"
                      : cell === "High"
                        ? "bg-gold/85 text-ink"
                        : cell === "Medium"
                          ? "bg-deep-blue/15 text-ink"
                          : "bg-pine/20 text-ink";

                  return (
                    <div
                      key={`${rowIndex}-${cellIndex}`}
                      className={`rounded-[1.2rem] border border-line p-6 text-center text-sm font-semibold ${tone}`}
                    >
                      {cell}
                    </div>
                  );
                }),
              )}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              This placeholder demonstrates how risk can be communicated quickly
              when design choices are simple, consistent, and transparent.
            </p>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card eyebrow="Leadership Communication" title="How this shapes my practice">
          <p className="text-sm leading-7 text-muted">
            In operational leadership, I want to communicate data in a way that
            helps teams act with confidence rather than confusion. That means
            prioritizing clear narrative framing, truthful visual design, and
            accountability for how evidence is interpreted.
          </p>
        </Card>

        <Card eyebrow="Action Plan" title="Next stage of growth">
          <div className="space-y-4">
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Gap</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I want broader experience tailoring a single dataset for
                executive, frontline, and compliance audiences.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Plan</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I will practice building audience-specific reporting formats and
                test whether each version supports the right level of action.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <ReferenceList references={areaTwoReferences} />
    </div>
  );
}
