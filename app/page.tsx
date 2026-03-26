import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BadgeCheck, BookOpen, BriefcaseBusiness, LineChart, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/Card";
import { competencies, navLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Profile and Overview",
  description:
    "Profile and overview page for Christy Eddington's ePortfolio.",
};

const heroStats = [
  {
    label: "Current Degree",
    value: "Bachelor of Science in Healthcare Information Management",
    icon: BookOpen,
    tone: "text-deep-blue",
  },
  {
    label: "Professional Focus",
    value: "Policy, compliance, and operations",
    icon: BriefcaseBusiness,
    tone: "text-clay",
  },
  {
    label: "Portfolio Theme",
    value: "Ethical interpretation of data",
    icon: LineChart,
    tone: "text-pine",
  },
  {
    label: "Experience",
    value: "20+ years supporting publications, policy, and compliance work",
    icon: BadgeCheck,
    tone: "text-deep-blue",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="px-1 py-4">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#cbeed7] bg-white px-4 py-2 text-sm text-muted">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#8ad49f]" />
              Available for new opportunities
            </div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold leading-none text-ink sm:text-6xl xl:text-7xl">
                Christy <span className="text-deep-blue">Eddington</span>
              </h1>
              <p className="text-2xl text-muted sm:text-3xl">
                Publications and Policy Specialist | Former U.S. Army Warrant Officer
              </p>
              <p className="max-w-3xl text-lg leading-8 text-muted">
                Detail-oriented Publications and Policy Specialist with over 20
                years of experience supporting mission-critical operations
                through accurate documentation, compliance, and change control.
                Currently completing a Bachelor of Science in Healthcare
                Information Management with a strong focus on data integrity and
                compliance.
              </p>
            </div>
            <blockquote className="max-w-3xl text-xl leading-8 text-deep-blue">
              Information access is not the same as insight. Credibility in
              leadership is based on interpretation, understanding, and moral
              accountability.
            </blockquote>
            <div className="flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-line bg-white px-3 py-2">
                Former U.S. Army Warrant Officer and Information Assurance
                Manager
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-2">
                Bachelor of Science in Healthcare Information Management in
                progress
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mx-auto max-w-md overflow-hidden rounded-[0.9rem] border border-line bg-white">
              <Image
                src="/photo.jpeg"
                alt="Portrait of Christy Eddington"
                width={900}
                height={1100}
                className="aspect-square h-full w-full object-cover"
                priority
              />
            </div>
            <div className="mx-auto flex w-full max-w-md flex-wrap gap-2 text-sm text-muted">
              <div className="flex w-fit max-w-full items-center gap-2 rounded-full border border-line bg-white px-3 py-2">
                <MapPin className="h-4 w-4 text-deep-blue" />
                <span>Atlanta, GA</span>
              </div>
              <div className="flex w-fit max-w-full items-center gap-2 rounded-full border border-line bg-white px-3 py-2">
                <Phone className="h-4 w-4 text-deep-blue" />
                <span>254-289-3835</span>
              </div>
              <div className="flex w-fit max-w-full items-center gap-2 rounded-full border border-line bg-white px-3 py-2">
                <Mail className="h-4 w-4 text-deep-blue" />
                <span>Christye99@yahoo.com</span>
              </div>
              <div className="w-fit max-w-full rounded-full border border-line bg-white px-3 py-2">
                Atlanta, Georgia
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {heroStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-[0.9rem] border border-line bg-white p-5"
            >
              <Icon className={`mb-3 h-5 w-5 ${stat.tone}`} />
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold leading-7 text-ink">
                {stat.value}
              </p>
            </div>
          );
        })}
      </section>

      <section id="portfolio-sections">
        <Card
          eyebrow="Professional Summary"
          title="What this portfolio demonstrates"
        >
          <p className="text-base leading-8 text-muted">
            This ePortfolio connects my academic development to my professional
            background in publications, policy, compliance, and operational
            support. It shows how my coursework in communication, digital
            literacy, problem solving, and ethical decision-making strengthens
            the same documentation discipline, quality assurance mindset, and
            cross-functional coordination reflected in my resume.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
            {navLinks.slice(1).map((link) => (
              <li key={link.href} className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-clay" />
                <span>{link.label} page expands one required competency area.</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            Core Competencies
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">
            Resume-aligned strengths
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {competencies.map((item) => (
            <article
              key={item.title}
              className="rounded-[0.9rem] border border-line bg-white p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-clay" />
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              </div>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
