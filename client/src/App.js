import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import FooterComponent from "./components/FooterComponent";
import AboutusComponent from "./components/AboutusComponent";
import UserLogin from "./pages/Userlogin";
import WorkerLogin from "./pages/Workerlogin";
import MailComponent from "./components/MailComponent";
import { ContactPage } from "./pages/Contactpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/AboutUs" element={<AboutusComponent />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Avneet" element={<UserLogin />} />
        <Route path="/Raj" element={<WorkerLogin />} />
        <Route path="*" element="Page not exist error 404" />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
