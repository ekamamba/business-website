import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="DMK Consulting Logo"
            width={48}
            height={48}
          />

          <span className="text-2xl font-bold text-slate-900">
            DMK Consulting
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="font-medium text-slate-700 transition-colors hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}