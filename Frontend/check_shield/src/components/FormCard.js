export default function FormCard({ children }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg flex flex-col items-center">
      {children}
    </div>
  );
}
