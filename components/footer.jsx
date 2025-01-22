export default function Footer() {
  return (
    <footer className="flex flex-col max-w-xl mx-auto pt-10 pb-6 space-y-1 text-sm text-gray-600">
      <p className="border-t border-gray-600 border-dashed pt-4">
        © 2025 Michael Bogani
      </p>
      <p>
        This site uses no tracking or cookies, other than privacy-respecting,
        GDPR-compliant analytics via{" "}
        <a href="https://plausible.io/">Plausible</a>.
      </p>
      <p>
        Made with <a href="https://nextjs.org/">Next.js</a>, hosted on{" "}
        <a href="https://vercel.com/">Vercel</a>
      </p>
    </footer>
  );
}
