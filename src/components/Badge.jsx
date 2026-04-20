export default function Badge({ label }) {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
      {label}
    </span>
  );
}
