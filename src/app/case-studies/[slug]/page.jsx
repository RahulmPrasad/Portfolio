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

  return <CaseStudyView study={study} />;
}
