import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserContext } from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./components/Cart";

//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On Demand Loading

// ant design
// chakra ui
// material ui
// tailwind
// styled components
// saas/scss

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    ///Make API Call
    const data = {
      name: "Sunitha G",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/namaste-react",
    basename: "/namaste-react",
    element: <AppLayout />,
    children: [
      {
        path: "/namaste-react",
        element: <Body />,
      },
      {
        path: "/namaste-react/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/namaste-react/contact",
        element: <Contact />,
      },
      {
        path: "/namaste-react/cart",
        element: <Cart />,
      },
      {
        path: "/namaste-react/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/namaste-react/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
