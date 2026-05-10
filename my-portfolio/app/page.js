const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const metrics = [
  { value: "12", label: "E2E automations" },
  { value: "$55K+", label: "annual savings" },
  { value: "4.5K+", label: "hours removed" },
  { value: "20+", label: "playbooks" },
];

const projects = [
  {
    title: "Storage Aggregate Utilization",
    stack: "NetApp REST / Ansible / Python",
    description:
      "Monitors aggregate utilization, reports threshold breaches, and triggers corrective actions before capacity risk grows.",
    result: "3,000+ hours saved yearly",
  },
  {
    title: "PIR Change Auto-Closure",
    stack: "ServiceNow / Ansible",
    description:
      "Validates PIR closure rules, closes eligible tasks through APIs, generates reports, and emails the team.",
    result: "50+ hours saved weekly",
  },
  {
    title: "ESXi and VM Hardening",
    stack: "VMware / Security Automation",
    description:
      "Enforces hardening parameters across VM and ESXi layers, then produces compliance evidence after every run.",
    result: "1 hour to under 5 minutes",
  },
];

const skillGroups = [
  {
    title: "Automation",
    items: ["Ansible", "Tower", "Terraform", "YAML", "JSON"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "VMware", "VirtualBox"],
  },
  {
    title: "Scripting",
    items: ["Python", "Bash", "PowerShell"],
  },
  {
    title: "Platforms",
    items: ["Linux", "Windows", "Docker", "Kubernetes", "Git"],
  },
  {
    title: "Enterprise",
    items: ["NetApp", "ServiceNow", "GitHub Actions", "VS Code"],
  },
];

const awards = [
  "AWS Certified Solutions Architect - Associate",
  "Microsoft Azure Fundamentals",
  "Automation of the Quarter - HCLTech",
  "Silver Jewel Award - HCLTech",
];

export default function Portfolio() {
  return (
    <main className="portfolio-shell">
      <section id="home" className="landing">
        <header className="landing-header">
          <a className="logo-lockup" href="#home" aria-label="Ayush home">
            <span className="logo-orbit">
              <span>A</span>
            </span>
            <span className="brand-word">booting creativity...</span>
          </a>

          <h1>
            AYUSH
            <span>KUSHWAHA</span>
          </h1>
        </header>

        <nav className="side-nav" aria-label="Main sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hero-art" aria-hidden="true">
          <div className="neon-ring" />
          <div className="hero-portrait" />
        </div>

        <div className="landing-role">
          <strong>Automation & DevOps</strong>
          <span>
            From <b>IN</b>
          </span>
        </div>

        <div className="landing-socials" aria-label="Social links">
          <a href="https://github.com/ayushkx">GH</a>
          <a href="https://linkedin.com/in/ayushkx">IN</a>
          <a href="mailto:ayushkushwaha855@gmail.com">@</a>
          <a href="/ayush_devops.pdf">CV</a>
        </div>

        <div className="scroll-cue">SCROLL</div>
      </section>

      <section className="impact-strip" aria-label="Impact metrics">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section id="about" className="content-section about-grid">
        <div>
          <p className="section-kicker">ABOUT</p>
          <h2>I automate the operational work teams should not repeat.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am Ayush Kushwaha, an Automation & DevOps Analyst at HCLTech with
            2.5+ years of experience across Ansible, Terraform, Python,
            ServiceNow, VMware, NetApp, AWS, Azure, Linux, and Windows.
          </p>
          <p>
            The creative angle is simple: build systems that feel invisible when
            they work. Fewer manual tickets, faster hardening, cleaner reports,
            and repeatable infrastructure changes.
          </p>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">PROJECTS</p>
            <h2>Selected field work</h2>
          </div>
          <a className="outline-link" href="#contact">
            collaborate
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-mark" />
              <p className="stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>{project.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <p className="section-kicker">STACK</p>
        <h2>Built for mixed infrastructure</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section awards-section">
        <p className="section-kicker">SIGNALS</p>
        <div className="award-list">
          {awards.map((award) => (
            <span key={award}>{award}</span>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <div>
          <p className="section-kicker">CONTACT</p>
          <h2>Have a manual process worth eliminating?</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:ayushkushwaha855@gmail.com">email</a>
          <a href="https://linkedin.com/in/ayushkx">linkedin</a>
          <a href="https://github.com/ayushkx">github</a>
          <a href="tel:+919616580835">phone</a>
        </div>
      </footer>
    </main>
  );
}
