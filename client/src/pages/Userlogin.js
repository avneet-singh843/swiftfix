import React, { useState } from "react";
import Header from "../components/LoginHeader";
import userimage from "../assets/userimage.png";
import { AiOutlineStar } from "react-icons/ai";

const ServiceCard = ({ name, away, reviews, rating, onBook, isBooked }) => (
  <div className="card">
    <img src={userimage} className="mx-auto w-[200px] mt-2" alt="User" />
    <h3 className="text-2xl text-center mt-2">{name}</h3>
    <h3 className="text-2xl text-center mt-2">{away} mins away</h3>
    {isBooked ? (
      <button className="booked-button">Booked</button>
    ) : (
      <button className="book-button" onClick={onBook}>
        Book
      </button>
    )}
    <div className="flex justify-between w-[90%] mx-auto mt-2">
      <div className="flex items-center">
        <h3 className="text-lg font-bold">{rating}</h3>
        <AiOutlineStar className="text-xl ml-1 text-yellow-500" />
      </div>
      <p className="text-lg">{reviews} Reviews</p>
    </div>
  </div>
);

const ServiceSection = ({ title, services, onBook }) => (
  <div className="service-section">
    <h1 className="mx-4 font-bold my-4 text-[24px]">{title}</h1>
    <div className="flex justify-between w-[80%] mx-auto mt-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          name={service.name}
          away={service.away}
          reviews={service.reviews}
          rating={service.rating}
          onBook={() => onBook(service.name)}
          isBooked={service.isBooked}
        />
      ))}
    </div>
    <div className="w-full h-[2px] bg-gray-300 mt-16"></div>
  </div>
);

const UserLogin = () => {
  const [bookedServices, setBookedServices] = useState({});

  const handleBookService = (name) => {
    alert(`${name} Booked!`);
    setBookedServices((prev) => ({ ...prev, [name]: true }));
  };

  const electricians = [
    { name: "Rohan", away: "17", reviews: "2", rating: "3" },
    { name: "Manoj", away: "9", reviews: "2", rating: "4" },
    { name: "Lokesh", away: "4", reviews: "1", rating: "4" },
  ];

  const plumbers = [
    { name: "Vinay", away: "7", reviews: "3", rating: "3.5" },
    { name: "Pranav", away: "11", reviews: "1", rating: "3.1" },
    { name: "Viresh", away: "15", reviews: "1", rating: "4" },
  ];

  const painters = [
    { name: "Sandeep", away: "12", reviews: "1", rating: "1" },
    { name: "Manoj", away: "9", reviews: "2", rating: "4" },
    { name: "Vikash", away: "6", reviews: "2", rating: "3" },
  ];

  // Add booking state to each service
  const addBookingState = (services) =>
    services.map((service) => ({
      ...service,
      isBooked: bookedServices[service.name] || false,
    }));

  return (
    <div style={{ position: "relative", zIndex: 0 }}>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans", sans-serif;
          background-color: #f9f9f9;
        }

        h1 {
          margin: 0;
        }

        h1.text-center {
          font-size: 24px;
          color: #00afaf;
          margin: 1rem 0;
        }

        .w-full.h-[2px] {
          background-color: #ddd;
          margin: 2rem 0;
        }

        .card {
          width: 280px;
          background-color: #fff;
          border-radius: 20px;
          border: 7px solid #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
          position: relative;
        }

        .card:hover {
          border-color: #00afaf;
          transform: translateY(-10px);
        }

        .book-button {
          background-color: #3498db;
          color: #fff;
          border: none;
          display: block;
          width: 60%;
          margin: 1rem auto;
          padding: 0.5rem;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .book-button:hover {
          background-color: #2878b5;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .booked-button {
          background-color: #2ecc71;
          color: white;
          border: none;
          display: block;
          width: 60%;
          margin: 1rem auto;
          padding: 0.5rem;
          font-size: 16px;
          border-radius: 5px;
        }

        .flex {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .card {
            width: 220px;
          }
        }

        @media (max-width: 480px) {
          .flex {
            justify-content: center;
          }

          .card {
            width: 90%;
            margin: 1rem auto;
          }
        }
      `}</style>
      <Header style={{ position: "relative", zIndex: 1000 }} />
      <h1 className="text-[#00afaf] text-center mt-4 text-[24px]">
        Book Services
      </h1>
      <div className="w-48 h-[2px] bg-[#00afaf] mt-2 mx-auto mb-6"></div>
      <ServiceSection
        title="Electricians"
        services={addBookingState(electricians)}
        onBook={handleBookService}
      />
      <ServiceSection
        title="Plumbers"
        services={addBookingState(plumbers)}
        onBook={handleBookService}
      />
      <ServiceSection
        title="Painters"
        services={addBookingState(painters)}
        onBook={handleBookService}
      />
    </div>
  );
};

export default UserLogin;
