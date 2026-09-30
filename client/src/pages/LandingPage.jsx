import { Link } from "react-router-dom";

// 👋 Contributors: this landing page is intentionally basic.
// Feel free to redesign it — add a hero image, animations, a
// feature grid, testimonials, a footer, dark mode... go wild!
// Just keep the "Start building" link pointing to /builder.

const features = [
  {
    title: "Pick a template",
    text: "Start from a ready-made certificate design.",
  },
  {
    title: "Use your own design",
    text: "Upload a certificate image you already made and place fields on top.",
  },
  {
    title: "Import a spreadsheet",
    text: "Upload a CSV of names and details — every row becomes a certificate.",
  },
];

function LandingPage() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Create certificates in bulk, the easy way</h1>
        <p>
          An open-source certificate builder. Design once, import your list of
          people, and generate a certificate for everyone.
        </p>
        <Link to="/builder" className="btn btn-primary">
          Start building →
        </Link>
      </section>

      <section className="features">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="contribute">
        <h2>Built by the community</h2>
        <p>
          This project is made for learning open source. Found a bug or have an
          idea? Open an issue or send a pull request!
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
