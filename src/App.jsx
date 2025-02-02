import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
// Normal Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Page Components
import HomePage from "./pages/HomePage";
import CoursesCategoryPage from "./pages/CoursesCategoryPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import CourseViewPage from "./pages/CourseViewPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import MentorsPage from "./pages/MentorsPage";

const App = () => {
  return (
    <div className="font-inter text-main_gray overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CoursesCategoryPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/order-completed" element={<OrderSuccessPage />} />
          <Route path="/classes" element={<CourseViewPage />} />
          <Route path="/course-details" element={<CourseDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
