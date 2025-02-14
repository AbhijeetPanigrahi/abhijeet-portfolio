import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Abhijeet Panigrahi. Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/AbhijeetPanigrahi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/abhijeet-panigrahi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/A_Panigrahi23"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
