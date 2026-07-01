import Link from "next/link";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Events",
    href: "#events",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold text-blue-600">
            TestForge
          </h2>

          <p className="mt-4 text-muted-foreground">
            A modern assessment platform designed for coding contests,
            aptitude tests, technical events and academic evaluations.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="font-semibold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3">

            {quickLinks.map((link) => (

              <li key={link.title}>

                <Link
                  href={link.href}
                  className="text-muted-foreground transition hover:text-blue-600"
                >
                  {link.title}
                </Link>

              </li>

            ))}

          </ul>

        </div>

        {/* Resources */}

        <div>

          <h3 className="font-semibold">
            Resources
          </h3>

          <ul className="mt-4 space-y-3">

            {resources.map((link) => (

              <li key={link.title}>

                <Link
                  href={link.href}
                  className="text-muted-foreground transition hover:text-blue-600"
                >
                  {link.title}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row">

          <p>
            © 2026 TestForge. All rights reserved.
          </p>

          <p>
            Built with Next.js • React • Tailwind CSS • FastAPI
          </p>

        </div>

      </div>

    </footer>
  );
}