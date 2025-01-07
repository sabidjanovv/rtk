import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <h1 className="text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            User Management
          </Link>
        </h1>

        {/* Navigation Menu */}
        <nav className="space-x-4">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
