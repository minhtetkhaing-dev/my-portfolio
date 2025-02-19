import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Experience Not Found</h2>
        <p className="mb-4">Could not find the requested experience.</p>
        <Link 
          href="/"
          className="text-blue-600 hover:underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}