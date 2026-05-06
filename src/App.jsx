import "./App.css";

const pipelineSteps = [
  {
    icon: "⚙️",
    name: "Code",
    sub: "git push origin main",
    border: "#378ADD",
    iconColor: "#378ADD",
    bg: "#0C447C22",
  },
  {
    icon: "🧪",
    name: "Test",
    sub: "jest / vitest runs",
    border: "#639922",
    iconColor: "#639922",
    bg: "#3B6D1122",
  },
  {
    icon: "📦",
    name: "Build",
    sub: "docker build & push",
    border: "#EF9F27",
    iconColor: "#EF9F27",
    bg: "#63380622",
  },
  {
    icon: "🚀",
    name: "Deploy",
    sub: "kubectl rollout",
    border: "#1D9E75",
    iconColor: "#1D9E75",
    bg: "#08504122",
  },
  {
    icon: "📊",
    name: "Monitor",
    sub: "grafana + alerts",
    border: "#D4537E",
    iconColor: "#D4537E",
    bg: "#72243E22",
  },
];

const cicdCards = [
  {
    icon: "♾️",
    title: "Continuous Integration",
    desc: "Every push triggers an automated run — lint, test, build. Catch bugs before they hit main.",
    tools: ["GitHub Actions", "GitLab CI"],
    border: "#378ADD",
    bg: "#0C447C18",
    titleColor: "#85B7EB",
    tagBg: "#0C447C33",
    tagColor: "#85B7EB",
  },
  {
    icon: "✅",
    title: "Automated Testing",
    desc: "Unit, integration, and e2e tests run in parallel. Nothing ships unless green.",
    tools: ["Jest", "Vitest", "Playwright"],
    border: "#1D9E75",
    bg: "#08504118",
    titleColor: "#5DCAA5",
    tagBg: "#08504133",
    tagColor: "#5DCAA5",
  },
  {
    icon: "🐳",
    title: "Container Build",
    desc: "Docker packages your app into one portable image. Same container in dev, staging, prod.",
    tools: ["Docker", "ECR / GHCR"],
    border: "#EF9F27",
    bg: "#63380618",
    titleColor: "#FAC775",
    tagBg: "#63380633",
    tagColor: "#FAC775",
  },
  {
    icon: "🔄",
    title: "Continuous Delivery",
    desc: "Kubernetes rolls out the new image with zero downtime. Rollback is one command away.",
    tools: ["Kubernetes", "Helm"],
    border: "#D4537E",
    bg: "#72243E18",
    titleColor: "#ED93B1",
    tagBg: "#72243E33",
    tagColor: "#ED93B1",
  },
];

const terminalLines = [
  { type: "cmd", text: "git push origin main" },
  { type: "comment", text: "# Workflow triggered: ci-cd.yml" },
  { type: "cmd", text: "npm run test -- --coverage" },
  { type: "ok", text: "✓ 28 tests passed in 4.2s" },
  { type: "cmd", text: "docker build -t my-react-app:v1.4 ." },
  { type: "ok", text: "✓ image built — 142MB" },
  { type: "cmd", text: "docker push registry/my-react-app:v1.4" },
  {
    type: "cmd",
    text: "kubectl set image deploy/app app=registry/my-react-app:v1.4",
  },
  { type: "ok", text: '✓ deployment "app" image updated — 0 downtime' },
  { type: "warn", text: "→ monitoring started on grafana:3000" },
];

const devSteps = [
  {
    num: "01",
    icon: "💻",
    title: "Write code",
    desc: "Feature branch, small commits, meaningful messages",
    bg: "#0C447C22",
    iconColor: "#378ADD",
  },
  {
    num: "02",
    icon: "🔀",
    title: "Open PR",
    desc: "CI runs tests automatically on every pull request",
    bg: "#08504122",
    iconColor: "#1D9E75",
  },
  {
    num: "03",
    icon: "✔️",
    title: "Review & merge",
    desc: "Peer review, approve, merge to main branch",
    bg: "#63380622",
    iconColor: "#EF9F27",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Auto deploy",
    desc: "Pipeline fires, image built, live in under 2 min",
    bg: "#72243E22",
    iconColor: "#D4537E",
  },
];

const sectionStyle = {
  textAlign: "center",
  fontSize: 11,
  fontFamily: "monospace",
  color: "#378ADD",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: 8,
};
const titleStyle = {
  textAlign: "center",
  fontSize: 22,
  fontWeight: 700,
  color: "#fff",
  marginBottom: 32,
};

export default function App() {
  return (
    <div style={{ width: "100%", fontFamily: "'Sora', system-ui, sans-serif" }}>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0a0e1a",
          padding: "4rem 2rem 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(55,138,221,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(55,138,221,0.07) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(55,138,221,0.15)",
            border: "1px solid rgba(55,138,221,0.3)",
            color: "#85B7EB",
            fontSize: 11,
            padding: "5px 14px",
            borderRadius: 99,
            marginBottom: 24,
            fontFamily: "monospace",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#1D9E75",
              display: "inline-block",
              animation: "pulse 1.2s infinite",
            }}
          />
          Live pipeline active
        </div>
        <h1
          style={{
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Welcome to <span style={{ color: "#378ADD" }}>Mern</span>
          <br />
          Ship faster. Break nothing.
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#8892a4",
            maxWidth: 460,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          From your first git push to a live production deploy — automated,
          monitored, and repeatable every time.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            ["0", "downtime deploys"],
            ["5", "pipeline stages"],
            ["<2min", "avg build time"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "monospace",
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: 11, color: "#8892a4", marginTop: 4 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section style={{ background: "#0f1525", padding: "3rem 2rem" }}>
        <p style={sectionStyle}>// the pipeline</p>
        <p style={titleStyle}>How code gets to production</p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 4,
            overflowX: "auto",
            paddingBottom: 8,
          }}
        >
          {pipelineSteps.map((s, i) => (
            <div
              key={s.name}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 100,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    background: s.bg,
                    border: `2px solid ${s.border}`,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>
                  {s.name}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#8892a4",
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  {s.sub}
                </div>
              </div>
              {i < pipelineSteps.length - 1 && (
                <span
                  style={{ color: "#2d3a50", fontSize: 20, paddingBottom: 24 }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CI/CD CARDS ── */}
      <section style={{ background: "#0a0e1a", padding: "3rem 2rem" }}>
        <p style={sectionStyle}>// ci/cd explained</p>
        <p style={titleStyle}>What happens at each stage</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 14,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {cicdCards.map((c) => (
            <div
              key={c.title}
              style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 14,
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: c.titleColor,
                  marginBottom: 8,
                }}
              >
                {c.icon} {c.title}
              </h3>
              <p style={{ fontSize: 12, color: "#8892a4", lineHeight: 1.7 }}>
                {c.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 5,
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                {c.tools.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10,
                      padding: "3px 9px",
                      borderRadius: 5,
                      background: c.tagBg,
                      color: c.tagColor,
                      fontFamily: "monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TERMINAL ── */}
      <section style={{ background: "#0f1525", padding: "3rem 2rem" }}>
        <p style={sectionStyle}>// live demo</p>
        <p style={titleStyle}>Deploying this React app</p>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            background: "#070b14",
            borderRadius: 14,
            border: "1px solid #1e2d45",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#111827",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            {["#E24B4A", "#EF9F27", "#639922"].map((c) => (
              <span
                key={c}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: c,
                  display: "inline-block",
                }}
              />
            ))}
            <span
              style={{
                fontSize: 11,
                color: "#4a5568",
                marginLeft: 8,
                fontFamily: "monospace",
              }}
            >
              devops-pipeline — bash
            </span>
          </div>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              fontFamily: "monospace",
              fontSize: 12,
              lineHeight: 2.1,
            }}
          >
            {terminalLines.map((l, i) => {
              const colors = {
                cmd: "#e2e8f0",
                ok: "#1D9E75",
                comment: "#334155",
                warn: "#EF9F27",
              };
              return (
                <div key={i}>
                  {l.type === "cmd" && (
                    <>
                      <span style={{ color: "#378ADD" }}>$ </span>
                      <span style={{ color: colors.cmd }}>{l.text}</span>
                    </>
                  )}
                  {l.type !== "cmd" && (
                    <span style={{ color: colors[l.type] }}>{l.text}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEV LOOP ── */}
      <section style={{ background: "#0a0e1a", padding: "3rem 2rem 4rem" }}>
        <p style={sectionStyle}>// dev workflow</p>
        <p style={titleStyle}>Your daily DevOps loop</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 12,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {devSteps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "#0f1525",
                border: "1px solid #1e2d45",
                borderRadius: 12,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontFamily: "monospace",
                  color: "#8892a4",
                  marginBottom: 10,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  margin: "0 auto 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  background: s.bg,
                }}
              >
                {s.icon}
              </div>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                {s.title}
              </h4>
              <p style={{ fontSize: 11, color: "#8892a4", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div
        style={{
          background: "#070b14",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderTop: "1px solid #1e2d45",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#1D9E75",
            display: "inline-block",
          }}
        />
        <span
          style={{ fontSize: 12, fontFamily: "monospace", color: "#8892a4" }}
        >
          Pipeline status:{" "}
          <span style={{ color: "#378ADD" }}>all systems operational</span> —
          built with React + <span style={{ color: "#378ADD" }}>DevOps</span>
        </span>
      </div>
    </div>
  );
}
