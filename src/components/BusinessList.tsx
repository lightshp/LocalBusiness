import { Link } from 'react-router-dom';

interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  isOpen: boolean;
}

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Café de Paris',
    category: 'Restaurant',
    address: '123 Rue de la Paix',
    rating: 4.5,
    isOpen: true
  },
  // Add more mock data as needed
];

export default function BusinessList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockBusinesses.map((business) => (
        <Link
          key={business.id}
          to={`/business/${business.id}`}
          className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{business.name}</h3>
                <p className="text-gray-600">{business.category}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                business.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {business.isOpen ? 'Ouvert' : 'Fermé'}
              </span>
            </div>
            
            <p className="text-gray-500 mt-2">{business.address}</p>
            
            <div className="mt-4 flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{business.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}