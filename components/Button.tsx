import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({
  text,
  href,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
    >
      {text}
    </Link>
  );
}