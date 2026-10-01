import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    useEffect(() => {
    document.title = "Not Found · Certificate Builder";
  }, []);
  return (
    <div className="landing">
      <section className="hero">
        <h1>Page not found</h1>
        <Link to="/" className="btn">Go home</Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
