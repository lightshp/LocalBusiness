import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import UserReviewPage from './pages/UserReviewPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business/:id" element={<BusinessDetailPage />} />
            <Route path="/review/:businessId" element={<UserReviewPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}