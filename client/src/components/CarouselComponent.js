import { useState, useEffect } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import back from "../assets/gray.jpg";
import "./CarouselComponent.css";

function CarouselComponent() {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        "https://swiftfix-backend.onrender.com/api/getreview"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const latestReviews = data.reviews.slice(-5);
      setReviewsList(latestReviews);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to load reviews. Please try again later.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="error-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          backgroundColor: "#f5f5f5",
          color: "#dc3545",
          padding: "1rem",
        }}
      >
        <p className="text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="carousel-wrapper">
      <style>
        {`
          .carousel-wrapper {
            position: relative;
            width: 100%;
            max-width: 100vw;
            overflow: hidden;
          }

          .carousel-background {
            background-image: url(${back});
            background-size: cover;
            background-position: center;
            height: 500px;
            width: 100%;
            opacity: 0.5;

          }

          .carousel-caption {
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 10;
            width: 90%;
            max-width: 800px;
          }

          .review-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  flex-wrap: wrap;
  word-wrap: break-word; /* Ensures long words break to the next line */
  overflow-wrap: break-word; /* Provides better compatibility */
}

          .review-email {
            font-size: 1.2rem;
            color: #666;
          }

          .carousel-control-prev,
          .carousel-control-next {
            width: 10%;
            opacity: 0.8;
            align-items: center;
            justify-content: center;
            height: 100%;
            position: absolute;
            z-index: 1;
          }

          .carousel-indicators {
            bottom: 0.5rem;
          }

          .carousel-indicators button {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: 0 4px;
          }

          @media (max-width: 768px) {
            .carousel-background {
              height: 250px;
            }
            .review-text {
              font-size: 1.2rem;
            }
            .review-email {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
              .carousel-background {
            background-image: url(${back});
            background-size: cover;
            background-position: center;
            height: 500px;
            width: 100%;
            opacity: 0.5;

          }
            .carousel-caption {
              padding: 0.5rem;
            }
          }
        `}
      </style>

      <Carousel pause="hover" touch={true} interval={5000}>
        {reviewsList.map((review) => {
          const rev = review.review.slice(0, 100); // Use slice instead of splice
          return (
            <Carousel.Item key={review._id}>
              <div className="carousel-background" />
              <Carousel.Caption className="carousel-caption">
                <div className="review-content">
                  <p className="review-text">{rev}</p>
                  <p className="review-email">{review.email}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
