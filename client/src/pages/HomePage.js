import CarouselComponent from "../components/CarouselComponent";
import MailComponent from "../components/MailComponent";
import ServicesComponent from "../components/ServicesComponent";
import ReviewComponent from "../components/ReviewComponent";
import IntroComponent from "../components/IntroComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useRef } from "react";

function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <IntroComponent />
      <ServicesComponent />
      <CarouselComponent />
      <ReviewComponent />

      <MailComponent />
    </div>
  );
}

export default HomePage;
