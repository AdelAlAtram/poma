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
import GBV from "./hompage/GBV";
import Conflict from "./hompage/Conflict";
import HumanRights from "./hompage/HumanRights";
import Research from "./hompage/Research";
import OurWay from "./hompage/OurWay";
import SecInOurWay from "./hompage/SecInOurWay";
import News from "./hompage/News";
import POMAStories from "./hompage/POMAStories";
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

// New Component for wrapping Dashboard routes with Sidebar
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
      <div>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeaderContent />
                <ImageCut />
                <InfoSection />
                <DifferenceSection />
              </>
            }
          />
          <Route path="/MentalHealth" element={<MentalHealth />} />
          <Route path="/ChildProtection" element={<ChildProtection />} />
          <Route path="/GBV" element={<GBV />} />
          <Route path="/Conflict" element={<Conflict />} />
          <Route path="/HumanRights" element={<HumanRights />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/News" element={<News />} />
          <Route path="/POMAStories" element={<POMAStories />} />
          <Route path="/InTheirWords" element={<InTheirWords />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/WhereWeWork" element={<WhereWeWork />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Corepeinciples" element={<Corepeinciples />} />
          <Route path="/OurVision" element={<OurVision />} />
          <Route path="/communityandcontribution" element={<TeamPage />} />
          <Route path="/poma/admin/login" element={<LoginForm />} />

          {/* Dashboard Routes - Wrapped with Sidebar */}
          <Route
            path="/Dashboard"
            element={
              <DashboardLayout>
                <div>Dashboard Overview</div>
              </DashboardLayout>
            }
          />
          <Route
            path="/Teaminside"
            element={
              <DashboardLayout>
                <Teaminside />
              </DashboardLayout>
            }
          />
          <Route
            path="/Bloginside"
            element={
              <DashboardLayout>
                <Blogsinside />
              </DashboardLayout>
            }
          />
          <Route
            path="/Publicationsinside"
            element={
              <DashboardLayout>
                <Publicationsinside />
              </DashboardLayout>
            }
          />

          {/* Example Route for OurWay */}
          <Route
            path="/OurWay"
            element={
              <>
                <OurWay />
                <SecInOurWay />
              </>
            }
          />
        </Routes>
        {/* Optional Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
