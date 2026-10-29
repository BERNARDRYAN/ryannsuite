import { projects } from "@/content/projects";
import { Section } from "@/components/ui/section";
import { ProjectShowcase } from "@/components/project-showcase";

export function Suite() {
  return (
    <Section
      id="apps"
      eyebrow="The Suite"
      heading={
        <>
          A suite of small, <span className="font-serif font-normal italic">well-made</span> tools
        </>
      }
      description="Each app does one everyday job and tries to do it nicely. All three are live — try them."
    >
      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
