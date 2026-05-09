import Image from "next/image";

const navItems = [
  { label: "#home", href: "#home" },
  { label: "#works", href: "#works" },
  { label: "#about-me", href: "#about" },
  { label: "#skills", href: "#skills" },
  { label: "#contacts", href: "#contact" },
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
    outcome: "3,000+ hours saved yearly",
    status: "production",
  },
  {
    title: "PIR Change Auto-Closure",
    stack: "ServiceNow / Ansible / Excel",
    description:
      "Validates PIR closure rules, closes eligible change tasks through APIs, emails reports, and removes repetitive ticket handling.",
    outcome: "50+ hours saved weekly",
    status: "production",
  },
  {
    title: "ESXi & VM Hardening",
    stack: "VMware / Security / Linux",
    description:
      "Enforces hardening parameters across VM and ESXi layers, then produces compliance evidence after every run.",
    outcome: "1 hour to under 5 minutes",
    status: "audit-ready",
  },
  {
    title: "Infra Provisioning Kits",
    stack: "Terraform / AWS / Azure",
    description:
      "Reusable infrastructure modules and scripts for repeatable cloud and virtualized environment provisioning.",
    outcome: "standardized delivery",
    status: "toolkit",
  },
  {
    title: "Ops Reporting Pipelines",
    stack: "Python / Bash / PowerShell",
    description:
      "Small focused scripts that collect operational data, format evidence, and hand teams the next action quickly.",
    outcome: "faster handoffs",
    status: "active",
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

const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Microsoft Azure Fundamentals",
  "Automation of the Quarter - HCLTech",
  "Silver Jewel Award - HCLTech",
];

const terminalLines = [
  "ansible-playbook storage-utilization.yml --limit prod",
  "terraform plan -out infra-change.tfplan",
  "python servicenow_close_pir.py --daily-window",
  "status: audit-ready in under 5 minutes",
];

const facts = [
  "Analyst - Automation & DevOps at HCLTech",
  "Based in Noida, India",
  "B.Tech in Electronics and Communication",
  "I like turning recurring ops work into repeatable systems",
];

export default function Portfolio() {
  return (
    <main className="site-shell">
      <div className="dot-field dot-field-top" aria-hidden="true" />
      <div className="dot-field dot-field-mid" aria-hidden="true" />
      <div className="corner-box corner-box-left" aria-hidden="true" />
      <div className="corner-box corner-box-right" aria-hidden="true" />

      <aside className="social-rail" aria-label="Social links">
        <a href="https://github.com/ayushkx" aria-label="GitHub">
          gh
        </a>
        <a href="https://linkedin.com/in/ayushkx" aria-label="LinkedIn">
          in
        </a>
        <a href="mailto:ayushkushwaha855@gmail.com" aria-label="Email">
          @
        </a>
      </aside>

      <div className="portfolio-frame">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Ayush portfolio home">
            <span className="brand-mark">a</span>
            <span>Ayush</span>
          </a>
          <nav aria-label="Portfolio sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <span className="language">EN</span>
        </header>

        <section id="home" className="hero-section">
          <div className="hero-heading">
            <p className="eyebrow">Portfolio</p>
            <h1>Ayush Kushwaha</h1>
            <div className="role-row">
              <span>/ Automation & DevOps Engineer</span>
              <span className="handle">@ayushkx</span>
            </div>
          </div>

          <div className="hero-window">
            <div className="domain-tab">ayushkx.dev</div>
            <div className="window-toolbar">
              <span />
              <span />
              <span />
              <div className="toolbar-lines">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="hero-content">
              <div className="intro-panel">
                <span className="small-label">~/profile</span>
                <h2>
                  I convert manual infrastructure work into dependable
                  automation.
                </h2>
                <p>
                  2.5+ years building Ansible, Terraform, Python, ServiceNow,
                  VMware, NetApp, AWS, and Azure workflows that make operations
                  faster, safer, and easier to repeat.
                </p>
                <div className="hero-actions">
                  <a href="#works">View work -&gt;</a>
                  <a href="/ayush_devops.pdf">Resume -&gt;</a>
                </div>
              </div>

              <div className="visual-panel" aria-label="Automation console visual">
                <div className="visual-avatar">
                  <div className="avatar-hood" />
                  <div className="avatar-face" />
                  <div className="avatar-core" />
                </div>
                <div className="status-strip">
                  <span />
                  <strong>automation-runner online</strong>
                </div>
              </div>
            </div>

            <div className="console-card">
              <span className="prompt">#</span>
              <div>
                {terminalLines.map((line) => (
                  <p key={line}>
                    <span>$</span> {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="metrics-row" aria-label="Portfolio metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="works" className="section-block section-projects">
          <div className="section-title">
            <h2>
              <span>/</span>projects
            </h2>
            <p>Selected automation work and operating impact.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-preview">
                  <span>{project.status}</span>
                  <div />
                </div>
                <div className="project-stack">{project.stack}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.outcome}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-block about-layout">
          <div className="about-copy">
            <div className="section-title">
              <h2>
                <span>/</span>about-me
              </h2>
              <p>Who am I?</p>
            </div>
            <p>
              Hello, I&apos;m Ayush. I work as an Automation & DevOps Analyst
              at HCLTech, where I build practical automation for infrastructure
              provisioning, configuration management, storage operations,
              ticket workflows, and security hardening.
            </p>
            <p>
              My favorite kind of work is the quiet operational win: the task
              that used to take a team an hour, now finishes in minutes with a
              clean report and fewer surprises.
            </p>
          </div>

          <div className="about-visual" aria-hidden="true">
            <Image src="/window.svg" alt="" width={92} height={92} />
            <div className="profile-cutout">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-title">
            <h2>
              <span>/</span>skills
            </h2>
            <p>Tools I use to ship repeatable infrastructure work.</p>
          </div>

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

        <section className="section-block facts-layout">
          <div>
            <div className="section-title">
              <h2>
                <span>/</span>quick-facts
              </h2>
              <p>Small useful context.</p>
            </div>
            <div className="fact-tags">
              {facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="section-title">
              <h2>
                <span>/</span>awards
              </h2>
              <p>Certifications and recognition.</p>
            </div>
            <div className="award-list">
              {certifications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div>
            <a className="brand" href="#home">
              <span className="brand-mark">a</span>
              <span>Ayush</span>
            </a>
            <p>Automation & DevOps Engineer</p>
          </div>
          <div className="contact-links">
            <a href="mailto:ayushkushwaha855@gmail.com">email</a>
            <a href="https://linkedin.com/in/ayushkx">linkedin</a>
            <a href="https://github.com/ayushkx">github</a>
            <a href="tel:+919616580835">phone</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
