import { useState } from "react";
import { Menu, X, ChevronDown, Home, Image, Briefcase, Info, Settings } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Gallery", icon: Image },
    { name: "Services", icon: Briefcase },
    { name: "About Us", icon: Info },
    { name: "Settings", icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">ServiceHub</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Login Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              Login
              <ChevronDown className={`w-4 h-4 transition-transform ${isLoginOpen ? "rotate-180" : ""}`} />
            </button>
            {isLoginOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                <a
                  href="#admin-login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Admin Login
                </a>
                <a
                  href="#vendor-login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Vendor Login
                </a>
                <a
                  href="#user-login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  User Login
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-500 mb-2">Login As:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#admin-login"
                    className="text-gray-700 hover:text-primary transition-colors pl-6"
                  >
                    Admin
                  </a>
                  <a
                    href="#vendor-login"
                    className="text-gray-700 hover:text-primary transition-colors pl-6"
                  >
                    Vendor
                  </a>
                  <a
                    href="#user-login"
                    className="text-gray-700 hover:text-primary transition-colors pl-6"
                  >
                    User
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
