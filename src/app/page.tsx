import { Hero } from "@/components/sections/hero";
import { Suite } from "@/components/sections/suite";
import { Principles } from "@/components/sections/principles";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, personSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={organizationSchema()} />
      <Hero />
      <Suite />
      <Principles />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
