import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

// Simulate an API to store ratings and comments
let ratings = []; // Temporary in-memory storage for ratings

// Simulate getting all ratings
const getRatings = () => {
  return new Promise((resolve) => {
    resolve(ratings);
  });
};

// Simulate submitting a rating (with stars and message)
const submitRating = (userName, stars, message) => {
  return new Promise((resolve, reject) => {
    if (stars < 1 || stars > 5) {
      reject('Rating must be between 1 and 5 stars');
    }
    // Simulate saving the rating (with user name, stars, and message)
    ratings.push({ userName, stars, message, date: new Date().toISOString() });
    resolve('Rating submitted successfully');
  });
};

function RatingPage() {
  const [rating, setRating] = useState(0); // Star rating (1-5)
  const [message, setMessage] = useState(''); // Rating message/feedback
  const [userName, setUserName] = useState(''); // User name or alias
  const [submittedRatings, setSubmittedRatings] = useState([]); // List of submitted ratings
  const [isLoading, setIsLoading] = useState(false); // Loading state for submitting
  const [feedbackMessage, setFeedbackMessage] = useState(''); // Feedback after submission

  // Fetch all ratings when the page loads
  useEffect(() => {
    getRatings().then((ratingsList) => {
      setSubmittedRatings(ratingsList);
    });
  }, []);

  const handleRatingChange = (stars) => {
    setRating(stars);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    if (!userName) {
      setFeedbackMessage('Please enter your name or alias.');
      return;
    }
    if (rating < 1 || rating > 5) {
      setFeedbackMessage('Please select a rating between 1 and 5 stars.');
      return;
    }
    setIsLoading(true);
    submitRating(userName, rating, message)
      .then(() => {
        setFeedbackMessage('Thank you for your rating!');
        setRating(0);
        setMessage('');
        setUserName('');
        // Fetch updated ratings
        return getRatings();
      })
      .then((ratingsList) => {
        setSubmittedRatings(ratingsList);
        setIsLoading(false);
      })
      .catch((error) => {
        setFeedbackMessage(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="rating-page-container pt-32 py-10 bg-black min-h-screen">
      <Header />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Rate "Ready or Not"</h1>
        <p className="text-lg mb-4">Let us know your thoughts!</p>
      </div>

      {/* User Name */}
      <div className="mb-4 text-center">
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="Enter your name or alias"
          className="p-2 rounded-md text-black"
        />
      </div>

      {/* Rating and Message Section */}
      <div className="flex justify-between items-start mx-10 mt-8">
        {/* Left Section: Rating Message and Star Rating */}
        <div className="w-1/2">
          {/* Star Rating */}
          <div className="mb-6 flex justify-start">
            {[1, 2, 3, 4, 5].map((stars) => (
              <span
                key={stars}
                className={`cursor-pointer text-3xl ${stars <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleRatingChange(stars)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Rating Message */}
          <div className="mb-6">
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Leave your message"
              className="p-2 rounded-md text-black w-full h-24"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`bg-blue-500 text-white p-3 rounded-md ${isLoading ? 'opacity-50' : ''}`}
          >
            {isLoading ? 'Submitting...' : 'Submit Rating'}
          </button>

          {/* Feedback Message */}
          {feedbackMessage && <p className="mt-4">{feedbackMessage}</p>}
        </div>

        {/* Right Section: Display Submitted Ratings */}
        <div className="w-1/2 ml-10">
          <h2 className="text-2xl font-bold">Ratings Submitted:</h2>
          {submittedRatings.length === 0 && <p>No ratings yet!</p>}
          {submittedRatings.map((ratingData, index) => (
            <div key={index} className="mb-4 p-4 border-b border-gray-700">
              {/* Submitted User Name - text-white applied here */}
              <p className="text-lg font-bold text-white">{ratingData.userName}</p>
              <div className="mb-2">
                {[1, 2, 3, 4, 5].map((stars) => (
                  <span
                    key={stars}
                    className={`text-3xl ${stars <= ratingData.stars ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* Submitted Message - text-white applied here */}
              <p className="text-white">{ratingData.message}</p>
              <small className="text-gray-400">{new Date(ratingData.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RatingPage;
