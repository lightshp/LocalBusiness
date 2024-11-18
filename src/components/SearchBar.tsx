import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <form className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher un commerce..."
            className="w-full px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Toutes catégories</option>
          <option value="restaurant">Restaurants</option>
          <option value="retail">Commerces</option>
          <option value="service">Services</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center"
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Rechercher
        </button>
      </form>
    </div>
  );
}