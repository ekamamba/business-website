type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

    </div>
  );
}