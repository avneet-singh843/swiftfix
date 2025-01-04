import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import "./LoginPage.css";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For displaying success or error message

  function registerUser(event) {
    event.preventDefault();

    // Dummy signup logic
    console.log("Registering User:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Dummy response
    setMessage("Registration successful! Welcome, " + name + "!");

    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <HeaderComponent />
      <div className="containerLogin">
        <div>
          <h1>Register</h1>
        </div>
        {message && <p className="successMessage">{message}</p>}
        <form className="loginForm form formControl" onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <style>{`
        .successMessage {
          color: green;
          font-weight: bold;
          text-align: center;
          margin-top: 10px;
        }
        .containerLogin {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .loginForm {
          display: flex;
          flex-direction: column;
          width: 300px;
        }
        .loginForm input {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
        }
        .loginForm input[type="submit"] {
          background-color: #00afaf;
          color: white;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        .loginForm input[type="submit"]:hover {
          background-color: #008080;
        }
      `}</style>
    </div>
  );
}

export default SignUpPage;
