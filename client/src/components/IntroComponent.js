import "./IntroComponent.css";
import Typewriter from "typewriter-effect";
function IntroComponent() {
  return (
    <div className="intro">
      <div className="intro2">
        <h1 className="introHeading mx-auto">How can we help you with?</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Painting", "Plumbing ", "Ac Servicing", "Repairing"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
