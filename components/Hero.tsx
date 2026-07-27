import Button from "./Button";

export default function Hero() {
  return (
    <section className="rounded-lg bg-slate-100 px-8 py-20 text-center">

      <h1 className="text-5xl font-bold">
        Modern Software Solutions
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
        Helping businesses build reliable web applications, cloud services, and custom software.
      </p>

       <div className="mt-8">
        <Button
          text="Contact Us"
          href="/contact"
        />
      </div>

    </section>
  );
}