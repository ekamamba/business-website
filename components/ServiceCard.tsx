type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>

      <a
        href="/services"
        className="mt-6 inline-block font-semibold text-blue-600 transition group-hover:text-blue-800"
      >
        Learn More →
      </a>
    </div>
  );
}