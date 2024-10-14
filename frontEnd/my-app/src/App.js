import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DifferenceSection from "./hompage/DifferenceSection";
import Footer from "./hompage/Footer";
import HeaderContent from "./hompage/HeaderContent";
import Header from "./hompage/HeaderPage";
import ImageCut from "./hompage/ImageCut";
import InfoSection from "./hompage/InfoSection";
import NavBar from "./hompage/NavBar";
import MentalHealth from "./hompage/MentalHealth";
import ChildProtection from "./hompage/ChildProtection";
import Conflict from "./hompage/Conflict";
import HumanRights from "./hompage/HumanRights";
import Research from "./hompage/Research";
import OurWay from "./hompage/OurWay";
import SecInOurWay from "./hompage/SecInOurWay";
import News from "./hompage/News";
import InTheirWords from "./hompage/InTheirWords";
import Publications from "./hompage/Publications";
import WhereWeWork from "./hompage/WhereWeWork";
import AboutUs from "./hompage/AboutUs";
import Corepeinciples from "./hompage/Corepeinciples";
import OurVision from "./hompage/OurVision";
import TeamPage from "./hompage/OurTeam";
import LoginForm from "./hompage/LoginForm";
import Dashboard from "./hompage/Dashboard";
import Teaminside from "./hompage/Teaminside";
import Blogsinside from "./hompage/Bloginside";
import Publicationsinside from "./hompage/Publicationsinside";

import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

// Layout for public pages with NavBar and Footer
const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar /> {/* Include Navbar in the main layout */}
      {children}
      <Footer /> {/* Include Footer in the main layout */}
    </>
  );
};

// Dashboard layout remains the same for pages without NavBar and Footer
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Dashboard /> {/* Sidebar Component */}
      <main className="flex-1 p-6">{children}</main> {/* Main content */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Wrapped with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Header />
              <HeaderContent />
              <ImageCut />
              <InfoSection />
              <DifferenceSection />
            </MainLayout>
          }
        />
        <Route
          path="/MentalHealth"
          element={
            <MainLayout>
              <MentalHealth />
            </MainLayout>
          }
        />
        <Route
          path="/ChildProtection"
          element={
            <MainLayout>
              <ChildProtection />
            </MainLayout>
          }
        />
        <Route
          path="/Conflict"
          element={
            <MainLayout>
              <Conflict />
            </MainLayout>
          }
        />
        <Route
          path="/HumanRights"
          element={
            <MainLayout>
              <HumanRights />
            </MainLayout>
          }
        />
        <Route
          path="/Research"
          element={
            <MainLayout>
              <Research />
            </MainLayout>
          }
        />
        <Route
          path="/Blogs"
          element={
            <MainLayout>
              <News />
            </MainLayout>
          }
        />
        <Route
          path="/InTheirWords"
          element={
            <MainLayout>
              <InTheirWords />
            </MainLayout>
          }
        />
        <Route
          path="/Publications"
          element={
            <MainLayout>
              <Publications />
            </MainLayout>
          }
        />
        <Route
          path="/WhereWeWork"
          element={
            <MainLayout>
              <WhereWeWork />
            </MainLayout>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/Corepeinciples"
          element={
            <MainLayout>
              <Corepeinciples />
            </MainLayout>
          }
        />
        <Route
          path="/OurVision"
          element={
            <MainLayout>
              <OurVision />
            </MainLayout>
          }
        />
        <Route
          path="/communityandcontribution"
          element={
            <MainLayout>
              <TeamPage />
            </MainLayout>
          }
        />
        <Route
          path="/poma/admin/login"
          element={
            <MainLayout>
              <LoginForm />
            </MainLayout>
          }
        />

        {/* Protected Dashboard Routes - Wrapped with ProtectedRoute and DashboardLayout */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Teaminside />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Teaminside"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Teaminside />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Bloginside"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Blogsinside />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Publicationsinside"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Publicationsinside />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Example Route for OurWay, keeping the NavBar and Footer */}
        <Route
          path="/OurWay"
          element={
            <MainLayout>
              <OurWay />
              <SecInOurWay />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
