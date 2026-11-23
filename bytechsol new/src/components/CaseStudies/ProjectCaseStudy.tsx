import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { industryUseCases } from "../../data/voxiqIndustries";
import { externalProjectWebsites } from "../../data/portfolioDestinations";
import NotFound from "../404";

function ExternalProject({ website }: { website: string }) {
  useEffect(() => {
    // Replace the retired case study URL so browser Back returns to the previous page.
    window.location.replace(website);
  }, [website]);
  return (
    <main className="container py-5">
      <p>Opening project website...</p>
      <a href={website}>Continue to project website</a>
    </main>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industryUseCases.find((item) => item.slug === slug);
  if (industry) return <Navigate to={"/case-studies#" + industry.slug} replace />;
  if (slug && Object.hasOwn(externalProjectWebsites, slug)) {
    return <ExternalProject website={externalProjectWebsites[slug]} />;
  }
  if (slug !== "voxiq" && slug !== "voxxiq") return <NotFound />;
  return <Navigate to="/case-studies" replace />;
}
