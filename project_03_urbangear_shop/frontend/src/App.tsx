import "./App.css";
import { useAppDispatch } from "./store/store";
import { useEffect, useState } from "react";
import { initializeCart } from "./store/actions/cartActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing page components used in routing
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";
import CartView from "./screens/CartView";

// Importing reusable UI components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import NavDrawer from "./components/NavDrawer";

/**
 * App Component is the main component of the application.
 * It sets up routing for the application and manages the state for the navigation drawer.
 */
const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatches the initializeCart action when the App component mounts
    dispatch(initializeCart());
  }, [dispatch]);

  // State to manage the visibility of the navigation drawer
  const [navDrawerToggle, setNavDrawerToggle] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar component with a prop to handle hamburger menu clicks */}
      <Navbar onHamburgerMenuClick={() => setNavDrawerToggle(true)} />

      {/* NavDrawer component with a prop to handle clicks within the drawer */}
      <NavDrawer
        isVisible={navDrawerToggle}
        onNavDrawerClick={() => setNavDrawerToggle(false)}
      />

      {/* Backdrop that appears when the navigation drawer is visible. Clicking it closes the drawer */}
      <Backdrop
        isVisible={navDrawerToggle}
        onBackdropClick={() => setNavDrawerToggle(false)}
      />
      <main>
        {/* Routing setup to navigate between different screens of the app. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
