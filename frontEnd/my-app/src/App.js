import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DifferenceSection from "./hompage/DifferenceSection";
import Footer from "./hompage/Footer";
import HeaderContent from "./hompage/HeaderContent";
import Header from "./hompage/HeaderPage";
import ImageCut from "./hompage/ImageCut";
import InfoSection from "./hompage/InfoSection";
import NavBar from "./hompage/NavBar";
import MentalHealth from "./hompage/MentalHealth";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
