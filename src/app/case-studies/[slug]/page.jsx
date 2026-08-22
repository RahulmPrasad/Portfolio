import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/data/caseStudies";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Rahul Prasad`,
    description: study.subheading,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  // Pass the slug, not the resolved study object — the study's `impact`
  // entries embed lucide icon components, which can't be serialized across
  // the server → client boundary as props. CaseStudyView (client) resolves
  // it itself from the same data module.
  return <CaseStudyView slug={slug} />;
}
