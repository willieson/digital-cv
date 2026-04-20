export default function Button({ children, onClick, variant = "primary" }) {
  const base = "font-semibold px-5 py-2 rounded-lg transition";
  const variants = {
    primary: "bg-blue-800 text-white hover:bg-blue-600",
    outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-100",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
