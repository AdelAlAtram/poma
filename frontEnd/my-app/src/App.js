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

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeaderContent />
                <ImageCut />
                <InfoSection />
                <DifferenceSection />
                <Footer />
              </>
            }
          />
          {/* Future Routes can be added here */}
          <Route path="/MentalHealth" element={<MentalHealth />} />
          <Route path="/ChildProtection" element={<ChildProtection />} />
          <Route path="/GBV" element={<GBV />} />
          <Route path="/Conflict" element={<Conflict />} />
          <Route path="/HumanRights" element={<HumanRights />} />
          <Route path="/Research" element={<Research />} />
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
      </div>
    </Router>
  );
}

export default App;
