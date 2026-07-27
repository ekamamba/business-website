export default function WhyChooseUs() {
  const benefits = [
    "15+ Years of Experience",
    "Custom Software Solutions",
    "Cloud & Database Expertise",
    "Responsive Customer Support",
  ];

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-4xl font-bold">
        Why Choose Us
      </h2>

      <ul className="space-y-4">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="rounded bg-slate-100 p-4"
          >
            ✅ {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}