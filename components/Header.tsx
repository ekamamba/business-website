import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="ABC Consulting Logo"
    width={48}
    height={48}
  />

  <span className="text-2xl font-bold">
    DMK Consulting
  </span>
</div>

        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}