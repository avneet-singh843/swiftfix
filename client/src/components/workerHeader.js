import { useState } from "react";
import image from "../assets/swift fix-logos.jpeg";
import { BiUserCircle } from "react-icons/bi";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          /* General Styles */
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }

          #navbar-1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #333;
            color: white;
            border-bottom: 1px solid #555;
          }

          .left ul {
            display: flex;
            align-items: center;
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .left ul img {
            width: 50px;
            height: auto;
            margin-right: 10px;
          }

          .left ul li a {
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-size: 20px;
            transition: color 0.3s ease;
          }

          .left ul li a:hover {
            color: #1e90ff;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            cursor: pointer;
          }

          .hamburger div {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 3px 0;
            transition: transform 0.3s;
          }

          .right ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            align-items: flex-start;
            background-color: #333;
            position: absolute;
            top: 60px;
            right: 0;
            width: 100%;
            border-top: 1px solid #555;
            z-index: 1000;
          }

          .right ul li {
            margin: 10px 20px;
          }

          .right ul li a {
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-size: 18px;
            transition: color 0.3s ease;
          }

          .right ul li a:hover {
            color: #1e90ff;
          }

          .vl {
            display: none;
          }

          .icon {
            color: white;
            font-size: 24px;
            margin-right: 10px;
          }

          /* Responsive Design */
          @media (min-width: 768px) {
            .hamburger {
              display: none;
            }

            .right ul {
              display: flex;
              flex-direction: row;
              align-items: center;
              position: static;
              background-color: transparent;
              width: auto;
              padding: 0;
            }

            .right ul li {
              margin: 0 10px;
            }

            .vl {
              display: inline-block;
              border-left: 1px solid #555;
              height: 20px;
              margin: 0 10px;
            }
          }
        `}
      </style>

      <div id="navbar-1">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="left">
          <ul>
            <li>
              <a href="/">Swift Fix</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <div className="vl"></div>
            <li>
              <a href="#">About Us</a>
            </li>
            <div className="vl"></div>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <div className="vl"></div>
            <li>
              <a href="/login">Raj</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
