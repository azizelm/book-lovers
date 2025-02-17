import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Nav from "./nav";
import BookSearch from "./components/homepage";
import SearchResults from "./components/SearchResults";

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><BookSearch /></Layout>,
    },
    {
      path: "/search", 
      element: <Layout><SearchResults /></Layout>,
    },
]);

export default router;
