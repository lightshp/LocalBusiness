import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
import Map from '../components/Map';

export default function HomePage() {
  const [view, setView] = useState<'list' | 'map'>('list');

  return (
    <div className="space-y-6">
      <SearchBar />
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded-lg ${
            view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Liste
        </button>
        <button
          onClick={() => setView('map')}
          className={`px-4 py-2 rounded-lg ${
            view === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Carte
        </button>
      </div>

      {view === 'list' ? <BusinessList /> : <Map />}
    </div>
  );
}