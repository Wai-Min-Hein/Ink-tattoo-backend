import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Artists from "./Artists";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import BlogDetails from "./components/BlogDetails";
import ArtistDetail from "./components/ArtistDetail";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import AdminArtists from "./AdminArtists";
import AdminBlogs from "./AdminBlogs";
import AdminArtworks from "./AdminArtworks";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/team" element={<Artists />} />
      <Route path="/team/:id" element={<ArtistDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Dashboard />} path="/admin/dashboard" />
        <Route element={<AdminArtists />} path="/admin/artists" />
        <Route element={<AdminBlogs />} path="/admin/blogs" />
        <Route element={<AdminArtworks />} path="/admin/artworks" />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoute;
