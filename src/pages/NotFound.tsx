import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const wrongUrl = location.pathname;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>

      <p className="text-lg mb-6">
        Oops! The page you tried to access does not exist:
        <span className="font-semibold text-gray-700 ml-1">{wrongUrl}</span>
      </p>

      {/* ✅ Detect wrong “/service/” and help user */}
      {wrongUrl.startsWith("/service/") && (
        <div className="mb-6">
          <p className="text-yellow-600 font-medium">
            Did you mean <span className="font-bold">/services/</span> instead of /service?
          </p>
          <Link
            to={wrongUrl.replace("/service/", "/services/")}
            className="text-blue-600 underline font-semibold"
          >
            Go To Correct Page →
          </Link>
        </div>
      )}

      <Link
        to="/services"
        className="text-white bg-blue-600 py-2 px-6 rounded-lg shadow hover:bg-blue-700"
      >
        Browse Services
      </Link>
    </section>
  );
}
