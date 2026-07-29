type TestimonialCardProps = {
  name: string;
  company: string;
  review: string;
};

export default function TestimonialCard({
  name,
  company,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-yellow-400 text-xl">
        ★★★★★
      </div>

      <p className="mt-6 text-slate-600 leading-7 italic">
        "{review}"
      </p>

      <div className="mt-8">
        <h4 className="font-bold text-slate-900">
          {name}
        </h4>

        <p className="text-sm text-slate-500">
          {company}
        </p>
      </div>
    </div>
  );
}