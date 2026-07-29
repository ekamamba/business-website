import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-extrabold lg:text-5xl">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-6 text-xl text-blue-100 leading-8">
          Whether you need a modern website, custom software,
          or technical consulting, we're ready to help you
          turn your ideas into reality.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition hover:scale-105 hover:bg-slate-100"
        >
          Get Your Free Quote
        </Link>

      </div>
    </section>
  );
}