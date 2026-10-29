import { projects } from "@/content/projects";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";

export function Suite() {
  return (
    <Section
      id="apps"
      eyebrow="The Suite"
      heading="A suite of small, well-made tools"
      description="Each app does one everyday job and tries to do it nicely. They share one backend, and each has its own colour."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
