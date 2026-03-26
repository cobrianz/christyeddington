import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ReferenceList } from "@/components/ReferenceList";
import { Timeline } from "@/components/Timeline";
import { references } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Effective Communication",
  description:
    "Reflection on effective communication, communication growth, and practical application.",
};

const timelineItems = [
  {
    period: "Foundation",
    title: "Introductory writing",
    description:
      "I began by strengthening structure, tone, and audience awareness in formal writing assignments.",
  },
  {
    period: "Development",
    title: "Collaborative projects",
    description:
      "Team assignments reinforced active listening, message adaptation, and constructive feedback practices.",
  },
  {
    period: "Application",
    title: "Policy drafting",
    description:
      "Writing for operational settings required precision, compliance language, and practical usability.",
  },
  {
    period: "Leadership",
    title: "Advanced presentations",
    description:
      "Later coursework and professional reflection sharpened my ability to present data for varied stakeholders.",
  },
];

export default function EffectiveCommunicationPage() {
  return (
    <div className="space-y-8">
      <section className="section-ring glass-panel rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          Effective Communication
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-semibold text-ink sm:text-6xl">
          Communication becomes effective when it is accurate, audience-aware,
          and useful in context.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          My growth in communication reflects a shift from simply delivering
          information to intentionally shaping messages for interpretation,
          action, and trust. This matters in operational leadership because
          people act on what they understand, not on what was merely said.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card eyebrow="Definition" title="What I learned">
          <p className="leading-8 text-muted">
            Kiessling and Fabry (2021) frame communicative competence as a
            teachable and assessable professional skill. I understand that to
            mean strong communication requires content knowledge, audience
            awareness, and ethical judgment working together.
          </p>
          <p className="mt-4 leading-8 text-muted">
            The most important concept for me is audience-centered adaptation.
            A technically correct message can still fail if it does not meet the
            audience at the right level of detail, tone, and format.
          </p>
        </Card>

        <Card eyebrow="Framework" title="Modes of communication">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.35rem] border border-line bg-white/70 p-4">
              <h3 className="text-xl font-semibold text-ink">Written</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Requires structure, consistency, plain language, and the right
                level of formality.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/70 p-4">
              <h3 className="text-xl font-semibold text-ink">Verbal</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Relies on listening, pacing, tone, and the ability to respond in
                real time.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/70 p-4">
              <h3 className="text-xl font-semibold text-ink">Nonverbal</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Reinforces credibility through posture, attentiveness, and
                consistency with spoken content.
              </p>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/70 p-4">
              <h3 className="text-xl font-semibold text-ink">Visual</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Uses design, hierarchy, and chart ethics to help a viewer grasp
                meaning quickly.
              </p>
            </article>
          </div>
        </Card>
      </section>

      <Card eyebrow="Growth Timeline" title="How my communication developed">
        <Timeline items={timelineItems} />
      </Card>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card eyebrow="Application" title="Practical skills and reflection">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Practical skills</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                <li>Professional email and report writing</li>
                <li>Revision of manuals and policy documents</li>
                <li>Presentation of data to mixed audiences</li>
                <li>Facilitation of cross-functional conversations</li>
              </ul>
            </article>
            <article className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">Personal growth</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Instructor feedback helped me notice where clarity improved when
                I organized ideas more intentionally and connected evidence to
                audience needs instead of assuming shared understanding.
              </p>
            </article>
          </div>
        </Card>

        <Card eyebrow="Improvement Plan" title="Remaining gaps">
          <div className="space-y-4">
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                High-conflict communication
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I want more practice navigating disagreement while preserving
                clarity and trust.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-line bg-white/75 p-5">
              <h3 className="text-xl font-semibold text-ink">
                Advanced data presentation
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                I plan to strengthen dashboard narration so visual evidence and
                spoken explanation work together more effectively.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <ReferenceList references={[references.kiesslingFabry2021]} />
    </div>
  );
}
