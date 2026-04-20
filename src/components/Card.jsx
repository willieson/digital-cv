export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      {title && (
        <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
      )}
      <div className="text-slate-700">{children}</div>
    </div>
  );
}
