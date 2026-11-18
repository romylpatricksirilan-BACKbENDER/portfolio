import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {profile.copyrightYear} {profile.name}. Built with Next.js.{" "}
          <a href={profile.sourceRepo} target="_blank" rel="noopener">
            View the source
          </a>
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
