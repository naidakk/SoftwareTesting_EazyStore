import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../assets/util/error.png";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./footer/Footer";

/**
 * ErrorPage Component - Handles both route and runtime errors dynamically
 */
const ErrorPage = ({ title, message }) => {
  const routeError = useRouteError();
  // Extract error details based on type
  let errorTitle = "Oops! Something went wrong";
  let errorMessage = "An unexpected error occurred. Please try again later.";

  if (routeError) {
    // Handle routing errors
    if (routeError.status) {
      errorTitle = `Error ${routeError.status}`;
    }
    if (routeError.data) {
      errorMessage = routeError.data;
    }
  } else if (title || message) {
    // Fallback to props
    errorTitle = title || errorTitle;
    errorMessage = message || errorMessage;
  }

  return (
    <div className="flex flex-col min-h-[980px]">
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        <div className="py-12 bg-normalbg dark:bg-darkbg font-primary">
          <div className="max-w-4xl mx-auto px-4">
            <PageTitle title={errorTitle} />
          </div>
          <div className="text-center text-gray-600 dark:text-lighter flex flex-col items-center">
            <p className="max-w-[576px] px-2 mx-auto leading-6 mb-4">
              {errorMessage}
            </p>
            <img
              src={errorImage}
              alt="Error"
              className="w-full max-w-[576px] mx-auto mb-6"
            />
            <Link
              to="/"
              className="py-3 px-6 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
