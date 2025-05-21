import FloatingActionButton from "@/components/Buttons/FAB/FloatinnActionnButtonn";
import React, { useState } from "react";
import { Link, Outlet } from "react-router"; // ← use react-router-dom here
import { ChevronsUp} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Race Info", path: "/race-info" },
  { name: "Participants", path: "/participants" },
  { name: "Results", path: "/race-results" },
  { name: "Gallery", path: "/gallery" },
  { name: "Guide", path: "/guide" },
];

const DefaultLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b border-gray-200 md:px-88 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Zinc Trail Run 2025
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet /> {/* ← this is where nested routes render */}
      </main>
      <div className="bg-gray-800 flex w-full h-fit justify-center items-center py-8 px-4">
        <p className="text-center text-[14px] text-white">
          © Copyright <b> Zinc Trail Run 2025</b>. All Rights Reserved.
        </p>
      </div>
      <FloatingActionButton
        icon={<ChevronsUp className="text-white" size={24} />}
        alt="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default DefaultLayout;
