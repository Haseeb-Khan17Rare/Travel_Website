import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DestinationsSlider from "./Components/DestinationSlider";
import Destinations from "./Pages/Destinations";
import DestinationDetails from "./Pages/DestinationDetails.jsx";
import Packages from "./Pages/Packages";
import PackageDetails from "./Pages/PackageDetails";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <DestinationsSlider />
              <Destinations />
              <Packages />
              <Contact />
            </>
          }
        />
        <Route path="/destination/:name" element={<DestinationDetails />} />
        <Route path="/packages/:slug" element={<PackageDetails />} />
        <Route path="/contact/:details" element={<Contact />} />
      </Routes>

       {/* ✅ Scroll-to-top Button */}
       <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" }) // 👈 scrolls directly to top
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600"
        >
          ▲
        </button>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
