import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setS] = useState(0); // To toggle between User and Worker login

  function handleLogin(event) {
    event.preventDefault();

    // Dummy login functionality
    console.log(`Logging in as ${buttonState === 0 ? "User" : "Worker"}`);
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear inputs after login
    setEmail("");
    setPassword("");
  }

  function toggleToUser() {
    setS(0);
  }

  function toggleToWorker() {
    setS(1);
  }

  return (
    <>
      <HeaderComponent />
      <div className="containerLogin">
        <form id="form" className="form" onSubmit={handleLogin}>
          <div className="flex flex-col sm:flex-row mx-auto w-full sm:w-[70%] lg:w-[50%] mt-6 gap-4">
            <div
              className={`px-4 py-2 font-semibold text-center cursor-pointer rounded-md shadow-xl ${
                buttonState === 0 ? "bg-[#00afaf] text-white" : "bg-white"
              }`}
              onClick={toggleToUser}
            >
              Login as User
            </div>
            <div
              className={`px-4 py-2 font-semibold text-center cursor-pointer rounded-md shadow-xl ${
                buttonState === 1 ? "bg-[#00afaf] text-white" : "bg-white"
              }`}
              onClick={toggleToWorker}
            >
              Login as Worker
            </div>
          </div>

          <div className="formControl">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="formControl">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          {buttonState == 0 && (
            <Link to={"/Avneet"}>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg py-2">
                LogIn
              </button>
            </Link>
          )}
          {buttonState == 1 && (
            <Link to={"/Raj"}>
              <button className=" bg-[#00afaf] hover:bg-[#00afaf] text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:shadow-lg py-2">
                LogIn
              </button>
            </Link>
          )}
        </form>
      </div>
      <label className="newAccount">
        Don't have an account?
        <span>
          <Link to="/SignUp">Sign up</Link>
        </span>
      </label>
    </>
  );
}

export default LoginPage;
