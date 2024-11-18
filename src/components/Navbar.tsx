import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            LocalSpot
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              <UserIcon className="h-6 w-6" />
              <span className="ml-2">Mon Profil</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}