import "./ReviewComponent.css";
import { useState } from "react";

function ReviewComponent() {
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]); // Dummy data state

  function addReview(event) {
    event.preventDefault();

    // Adding new review to dummy data
    const newReview = { email, review };
    setSubmittedReviews([...submittedReviews, newReview]);

    // Clearing input fields
    setEmail("");
    setReview("");
  }

  return (
    <>
      <div className="addReview px-[20%]">
        <h1
          className="pt-4 px-auto text-center"
          style={{ fontSize: "2.5rem", fontWeight: 500 }}
        >
          Add Reviews
        </h1>
        <form className="reviewBox text-xl w-[100%]" onSubmit={addReview}>
          <input
            className="w-full mt-4 rounded-md py-2 pl-2 shadow-md outline-none text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <br />
          <input
            className="w-full mt-4 rounded-md py-2 pl-2 shadow-md outline-none text-sm sm:text-base"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Add your valuable review..."
          />
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 hover:shadow-lg mt-4 mx-auto block sm:mx-[30%] text-sm sm:text-base"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}

export default ReviewComponent;
