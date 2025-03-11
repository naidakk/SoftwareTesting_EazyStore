import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import React from "react";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === "loading" ? (
        // Show only the loading message and hide Outlet
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-2xl font-semibold text-primary dark:text-light">
            Loading...
          </span>
        </div>
      ) : (
        // Show the actual page only when not loading
        <Outlet />
      )}
      <Footer />
    </>
  );
}

export default App;
