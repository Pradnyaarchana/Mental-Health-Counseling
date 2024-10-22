import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// Importing components
import MindBlissApp from './components/MindBlissComponents/MindBlissApp';
import BookAppointment from './components/BookAppointment/BookAppointment';
import EmergencyHelpline from './components/EmergencyHelpline/EmergencyHelpline';
import Header from './components/Header/Header';
import HealthAndWellness from './components/HealthAndWellness/HealthAndWellness';
import Lifeline from './components/Lifeline/Lifeline';
import LoginPage from './components/LoginPage/LoginPage';
import MeditationPage from './components/MeditationPage/MeditationPage';
import MusicComponent from './components/MusicComponent/MusicComponent';
import RegisterPage from './components/RegisterPage/RegisterPage';
import SOSPage from './components/SOSPage/SOSPage';
import SurveyTest from './components/SurveyTest/SurveyTest';
import TherapyPage from './components/TherapyPage/TherapyPage';
import BlogPage from './components/BlogPage/BlogPage';
import BlogDetailPage from './components/BlogDetailPage/BlogDetailPage'; // Import BlogDetailPage

// Component to conditionally render Header
function Layout() {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* Conditionally render the header only if the route is not login or register */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
      
      {/* Routes will still be handled here */}
      <Routes>
        <Route path="/" element={<MindBlissApp />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/emergency-helpline" element={<EmergencyHelpline />} />
        <Route path="/health-and-wellness" element={<HealthAndWellness />} />
        <Route path="/lifeline" element={<Lifeline />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/meditation" element={<MeditationPage />} />
        <Route path="/music" element={<MusicComponent />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sos" element={<SOSPage />} />
        <Route path="/survey-test" element={<SurveyTest />} />
        <Route path="/therapy" element={<TherapyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} /> {/* New route for blog detail */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout /> {/* Layout component handles header and routes */}
    </Router>
  );
}

export default App;
