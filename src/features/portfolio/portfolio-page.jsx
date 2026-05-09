import { useEffect, useEffectEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ChevronDown,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Sparkles,
  Target,
  Wrench,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Toaster } from "@/components/ui/sonner";
import { ContactForm } from "./contact-form";
import {
  aboutCards,
  aboutTags,
  careerPhases,
  certificates,
  contactMethods,
  educationItems,
  experienceProjects,
  experienceSnapshots,
  footerHighlights,
  heroHighlights,
  heroStats,
  learningPriorities,
  navItems,
  personalProjects,
  profile,
  reflectionHighlights,
  reflections,
  skillCategories,
  universityProjects,
} from "./content";
import { SectionHeader } from "./section-header";
import { buildResumeRequestHref, scrollToSection } from "./utils";

const aboutIconMap = {
  education: GraduationCap,
  internship: Briefcase,
  focus: Target,
};

const skillIconMap = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const contactIconMap = {
  email: Mail,
  phone: Phone,
};

const primaryNavIds = ["home", "about", "education", "experience", "skills", "contact"];
const heroProfileImage = "https://i.imgur.com/P1tgG9G.png";

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryNavItems = navItems.filter((item) => primaryNavIds.includes(item.id));
  const secondaryNavItems = navItems.filter((item) => !primaryNavIds.includes(item.id));

  const syncScrollState = useEffectEvent(() => {
    setScrolled(window.scrollY > 20);
  });

  useEffect(() => {
    syncScrollState();
    window.addEventListener("scroll", syncScrollState);

    return () => window.removeEventListener("scroll", syncScrollState);
  }, [syncScrollState]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
        <button
          onClick={() => scrollToSection("home")}
          className="flex shrink-0 items-center gap-2 font-bold"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-hero text-primary-foreground grid place-items-center text-sm shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                  More
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="hidden shrink-0 md:flex items-center gap-2">
          <Button size="sm" variant="hero" asChild>
            <a href={buildResumeRequestHref()}>
              <Download className="w-4 h-4" />
              Request CV
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                className="text-left px-3 py-2 text-sm rounded-md hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {profile.availability}
            </Badge>
            <Badge variant="outline" className="border-border gap-1.5">
              <MapPin className="w-3 h-3" />
              {profile.location}
            </Badge>
          </div>

          <p className="text-muted-foreground text-lg">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            DANUKA
            <br />
            <span className="text-gradient">CHATHURYA</span>
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Role</span>
            <span className="h-px flex-1 max-w-16 bg-border" />
            <span className="font-semibold">{profile.role}</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building polished full stack experiences with strong UI thinking, clean API design, and
            production-focused engineering habits.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
            {heroHighlights.map((item) => (
              <div key={item.label} className="p-4 rounded-xl border border-border bg-card/50">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("experience")}>
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={buildResumeRequestHref()}>
                <Download className="w-4 h-4" />
                Request CV
              </a>
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="outline" size="sm" asChild>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elegant bg-card">
            <img
              src={heroProfileImage}
              alt={`Portrait of ${profile.fullName}`}
              width={896}
              height={1152}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-background/80 backdrop-blur-md border border-border"
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="text-xs text-muted-foreground">Current role</div>
              <div className="font-semibold text-sm mt-1">{profile.currentRole}</div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card">
              <div className="text-xs text-muted-foreground">Core strength</div>
              <div className="font-semibold text-sm mt-1">{profile.coreStrength}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          title="A portfolio that reflects my growth as a full stack developer"
          lead="This section highlights my academic background, internship experience, and growing interest in full stack development in a way that is clear and easy for recruiters and collaborators to scan."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <div className="p-8 rounded-2xl border border-border bg-card space-y-5">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a 4th-year IT undergraduate at SLIIT University with a strong foundation in
              programming, full-stack development, and modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I completed my internship as a Software Engineer Intern at Gamage Recruiters, gaining
              hands-on experience in developing and maintaining real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am passionate about building scalable applications, enhancing user experiences, and
              contributing to innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {aboutTags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {aboutCards.map((card) => {
              const Icon = aboutIconMap[card.icon];

              return (
                <div
                  key={card.label}
                  className="p-5 rounded-2xl border border-border bg-card flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-hero grid place-items-center shrink-0 shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </div>
                    <div className="font-semibold mt-1">{card.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title="An academic timeline that reflects both foundation and progression"
          lead="This timeline highlights the key stages in your education, from school-level science studies to your current degree path in Information Technology."
        />

        <div className="relative pl-8 space-y-8 border-l-2 border-border">
          {educationItems.map((item) => (
            <div key={`${item.place}-${item.period}`} className="relative">
              <div className="absolute -left-[42px] w-5 h-5 rounded-full bg-gradient-hero shadow-glow ring-4 ring-background" />
              <div className="text-sm text-muted-foreground mb-2">{item.period}</div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{item.place}</h3>
                  <Badge variant={item.status === "Current" ? "default" : "secondary"}>
                    {item.status}
                  </Badge>
                </div>
                <div className="font-medium">{item.detail}</div>
                {item.note ? (
                  <div className="text-sm text-muted-foreground mt-2">{item.note}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Work Experience"
          title="Featured internship experience at Gamage Recruiters"
          lead="This section highlights the real project work I handled during my internship, from Figma-based planning to frontend implementation across multiple web products."
        />

        <div className="p-8 rounded-3xl border border-border bg-card mb-10">
          <div className="flex flex-wrap items-start gap-6 justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero grid place-items-center font-bold text-primary-foreground text-lg shadow-glow">
                GR
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Internship Placement
                </div>
                <h3 className="text-2xl font-bold">{profile.company}</h3>
                <div className="text-muted-foreground">Intern Software Engineer</div>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              May 2025 - Nov 2025
            </Badge>
          </div>

          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <div className="text-xs uppercase tracking-wider text-foreground font-semibold">
              Overview
            </div>
            <p>
              As a Software Engineering Intern at Gamage Recruiters, I worked with the software
              development team to build web-based solutions for both internal and external users.
            </p>
            <p>
              Contributed from early-stage wireframing and UI/UX design through frontend
              implementation.
            </p>
            <p>
              Worked on multiple products serving different user groups, from public-facing websites
              to internal recruitment tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {experienceSnapshots.map((snapshot) => (
              <div
                key={snapshot.label}
                className="p-5 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="text-[11px] uppercase tracking-wider text-primary font-semibold mb-1">
                  Snapshot
                </div>
                <div className="font-bold mb-2">{snapshot.label}</div>
                <p className="text-sm text-muted-foreground">{snapshot.text}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2">Project Highlights</h3>
        <p className="text-muted-foreground mb-8">
          A closer look at the products I contributed to and the kind of work I handled in each one.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {experienceProjects.map((project) => (
            <div
              key={project.n}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition group"
            >
              <div className="text-5xl font-bold text-gradient mb-4">{project.n}</div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">{project.body}</p>
              <ul className="space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="A categorized toolkit built around modern full stack development"
          lead="These categories organize the technologies I currently work with across interface development, backend engineering, databases, and delivery tooling."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon];

            return (
              <div key={category.name} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-hero grid place-items-center shadow-glow">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <div className="text-xs text-muted-foreground">
                        {category.skills.length} Skills
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{category.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border"
                    >
                      <span className="w-9 h-9 rounded-lg bg-gradient-hero grid place-items-center text-xs font-bold text-primary-foreground">
                        {skill.abbr}
                      </span>
                      <div>
                        <div className="font-semibold text-sm">{skill.name}</div>
                        <div className="text-[10px] text-muted-foreground">Current toolkit</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="university-projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="University Projects"
          title="Selected university builds across systems, apps, and product ideas"
          lead="These project cards showcase the range of systems and product concepts I have explored through university work, from operational platforms to full-stack application ideas."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {universityProjects.map((project) => (
            <div
              key={project.n}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition">
                {project.n}
              </div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                Project {project.n}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="text-[10px]">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{project.desc}</p>
            </div>
          ))}
        </div>

        <div id="personal-projects">
          <SectionHeader
            eyebrow="Personal Projects"
            title="Featured personal builds with polished presentation and product-focused UI"
            lead="These cards highlight personal full-stack and frontend projects, each presented with its core stack and short context."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project) => (
              <div
                key={project.abbr}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero grid place-items-center font-bold text-primary-foreground shadow-glow shrink-0">
                    {project.abbr}
                  </div>
                  <div className="flex-1">
                    <Badge
                      variant="outline"
                      className="border-primary/40 text-primary text-[10px] mb-2"
                    >
                      Featured Build
                    </Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="secondary" className="text-[10px]">
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Certificates"
          title="Verified learning, presented in a clean gallery with quick preview access"
          lead="Use this section to showcase the credentials that support your portfolio story. Each card keeps the certificate title, issuer, and date easy to scan."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <article
              key={certificate.n}
              className="rounded-2xl border border-border bg-card overflow-hidden group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur text-[10px] uppercase tracking-wider">
                  Certificate
                </div>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 grid place-items-center transition">
                  <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  Certificate {certificate.n}
                </div>
                <h3 className="font-bold mb-3 leading-snug">{certificate.title}</h3>
                <div className="flex justify-between text-sm gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Issuer</div>
                    <div className="font-medium">{certificate.issuer}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Date</div>
                    <div className="font-medium">{certificate.date}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReflectiveSection() {
  return (
    <section id="reflective-journal" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Reflective Journal"
          title="A reflective timeline of what PPW taught me and where I want to improve next"
          lead="This section captures the main lessons, skills, challenges, and next steps that came out of my PPW learning experience."
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {reflectionHighlights.map((highlight) => (
            <Badge
              key={highlight}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary py-1.5 px-3"
            >
              <Sparkles className="w-3 h-3 mr-1.5" />
              {highlight}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reflections.map((reflection) => (
            <article
              key={reflection.n}
              className="p-6 rounded-2xl border border-border bg-card relative"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{reflection.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Reflection {reflection.n}
              </div>
              <h3 className="text-xl font-bold mb-3">{reflection.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{reflection.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {reflection.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="career-development-plan" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Career Development Plan"
          title="A roadmap that connects near-term growth with long-term full stack ambition"
          lead="This plan breaks my growth into clear phases, while also highlighting the technologies and practices I want to invest in next."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {careerPhases.map((phase) => (
            <div key={phase.n} className="p-6 rounded-2xl border border-border bg-card relative">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl font-bold text-gradient">{phase.n}</div>
                <Badge variant="outline">{phase.time}</Badge>
              </div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                {phase.term}
              </div>
              <h3 className="text-lg font-bold mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold">Skills To Learn</h3>
          </div>
          <p className="text-muted-foreground mb-2">Next technical priorities</p>
          <p className="text-sm text-muted-foreground mb-8">
            These progress indicators represent the areas I want to prioritize as I move from
            application building into stronger delivery, infrastructure, and system thinking.
          </p>
          <div className="space-y-6">
            {learningPriorities.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-muted-foreground">Roadmap priority</div>
                  </div>
                  <div className="text-lg font-bold text-primary">{item.value}%</div>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect for internships, full stack projects, and collaboration"
          lead="Reach out directly by phone or email, or use the form below to draft a polished message with built-in validation."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
              <Badge
                variant="secondary"
                className="mb-3 bg-background/20 text-primary-foreground border-0"
              >
                Available For Opportunities
              </Badge>
              <h3 className="text-2xl font-bold mb-2">
                Start the conversation with the channel that fits best.
              </h3>
              <p className="opacity-90">
                I&apos;m open to internship opportunities, full stack development work, and
                meaningful collaboration. Clear contact details and a simple form make reaching out
                easy.
              </p>
            </div>

            {contactMethods.map((method) => {
              const Icon = contactIconMap[method.icon];

              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="p-5 rounded-2xl border border-border bg-card flex gap-4 hover:border-primary/40 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {method.label}
                    </div>
                    <div className="font-semibold">{method.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{method.note}</div>
                  </div>
                </a>
              );
            })}

            <div className="p-5 rounded-2xl border border-border bg-card">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Response Window
              </div>
              <div className="font-semibold">{profile.responseWindow}</div>
              <p className="text-sm text-muted-foreground mt-2">
                Email is the best option for detailed project discussions and opportunity inquiries.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center font-bold shadow-glow">
                {profile.initials}
              </span>
              <div>
                <div className="font-bold">{profile.fullName}</div>
                <div className="text-xs text-muted-foreground">{profile.role}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A focused portfolio crafted to present internship experience, selected builds, and
              full stack strengths with clarity and confidence.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              If you are reviewing opportunities, collaborations, or project work, the quickest way
              to reach me is through email or phone.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Email</div>
            <div className="font-medium mb-4">{profile.email}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Response Time
            </div>
            <div className="font-medium">{profile.responseWindow}</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Explore
              </div>
              <ul className="space-y-2 text-sm">
                {["About", "Experience", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Highlights
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {footerHighlights.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>&copy; 2026 {profile.fullName}. All rights reserved.</div>
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover:text-primary"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ReflectiveSection />
        <CareerSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
