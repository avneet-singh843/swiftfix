import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
// import { useState } from "react";
function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch(
      "https://swiftfix-backend.onrender.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  }
  // const [buttonState, setS] = useState(0);
  // function make1() {
  //     setS(1)
  // }
  // function make0() {
  //     setS(0)
  // }
  const [buttonState, setS] = useState(0);
  function make1() {
    setS(1);
  }
  function make0() {
    setS(0);
  }

  return (
    <>
      <HeaderComponent />
      <div class="containerLogin">
        <form id="form" class="form">
          <div className="flex flex-col sm:flex-row mx-auto w-full sm:w-[70%] lg:w-[50%] mt-6 gap-4">
            {buttonState === 0 && (
              <div
                className="px-4 py-2 bg-[#00afaf] font-semibold text-white shadow-xl text-center cursor-pointer rounded-md"
                onClick={make0}
              >
                Login as User
              </div>
            )}
            {buttonState === 1 && (
              <div
                className="px-4 py-2 bg-white font-semibold shadow-xl text-center cursor-pointer rounded-md"
                onClick={make0}
              >
                Login as User
              </div>
            )}
            {buttonState === 1 && (
              <div
                className="px-4 py-2 bg-[#00afaf] font-semibold text-white shadow-xl text-center cursor-pointer rounded-md"
                onClick={make1}
              >
                Login as Worker
              </div>
            )}
            {buttonState === 0 && (
              <div
                className="px-4 py-2 bg-white font-semibold shadow-xl text-center cursor-pointer rounded-md"
                onClick={make1}
              >
                Login as Worker
              </div>
            )}
          </div>

          <div class="formControl">
            <label for="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="formControl">
            <label for="password">Enter</label>
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
          <a href="/SignUp">Sign up</a>
        </span>
      </label>
    </>
  );
}
export default LoginPage;
