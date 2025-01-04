import { useState } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import back from "../assets/gray.jpg";
import "./CarouselComponent.css";

function CarouselComponent() {
  const [reviewsList, setReviewsList] = useState([
    {
      _id: "1",
      email: "user1@example.com",
      review:
        "SwiftFix provided excellent service! Highly recommend them for any repairs.",
    },
    {
      _id: "2",
      email: "user2@example.com",
      review:
        "Very professional and quick. The technician was very polite and efficient.",
    },
    {
      _id: "3",
      email: "user3@example.com",
      review:
        "Had a great experience with SwiftFix. They were on time and did a fantastic job.",
    },
    {
      _id: "4",
      email: "user4@example.com",
      review:
        "Affordable and reliable services. Will definitely use them again in the future.",
    },
    {
      _id: "5",
      email: "user5@example.com",
      review:
        "The repair work was done perfectly. Couldn't ask for better service!",
    },
  ]);

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
            word-wrap: break-word;
            overflow-wrap: break-word;
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
          const rev = review.review.slice(0, 100);
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
