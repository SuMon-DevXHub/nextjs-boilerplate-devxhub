import Link from "next/link";
import LocaleSwitcherWrapper from "../LocaleSwitcherWrapper";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Devxhub
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>

            <LocaleSwitcherWrapper />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
