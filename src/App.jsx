import React, { useState } from "react";
import { Header } from "./components/organisms/Header";
import { Footer } from "./components/organisms/Footer";
import { AboutUs } from "./pages/AboutUs";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutUs />;
      case "home":
        return <AboutUs />; // For now, redirect to About Us
      case "performance":
        return <AboutUs />; // For now, redirect to About Us
      case "programs":
        return <AboutUs />; // For now, redirect to About Us
      case "workshops":
        return <AboutUs />; // For now, redirect to About Us
      case "educational-tours":
        return <AboutUs />; // For now, redirect to About Us
      default:
        return <AboutUs />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fffcf5] flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <main className="flex-1">
          {renderCurrentPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;