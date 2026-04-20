const ExperienceCard = ({ title, company, period, description }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-500 italic mb-4">
        {company} ・ <b>{period}</b>
      </p>
      {Array.isArray(description) ? (
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 text-sm">{description}</p>
      )}
    </div>
  );
};

export default ExperienceCard;
