import React, { useState } from "react";
import "./Reviews.scss";

const reviewsData = [
  {
    user: "Garner David",
    location: "Parksville",
    stars: 5,
    review:
      "Anna Bell's deep house cleaning service is truly exceptional. From start to finish, she demonstrated professionalism and attention to detail that exceeded my expectations. Her communication was outstanding, providing daily updates and accommodating my requests with ease. Anna's dedication to delivering exceptional results was evident in every aspect of her work. I highly recommend her services to anyone in need of thorough and reliable house cleaning. I will definitely be a repeat customer!",
    image:
      "https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600",
    countryFlag:
      "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
  },
  {
    user: "Sidney Owen",
    location: "Qualicum Beach",
    stars: 5,
    review:
      "Anna's deep house cleaning service exceeded my expectations in every way. She approached the task with professionalism and punctuality, ensuring that every corner of my home was thoroughly cleaned. Her attention to detail and dedication to customer satisfaction are commendable. I highly recommend her services to anyone looking for top-notch cleaning services.",
    image:
      "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600",
    countryFlag:
      "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
  },
  {
    user: "Lyle Giles",
    location: "Parksville",
    stars: 5,
    review:
      "Anna Bell's deep house cleaning service is outstanding. She consistently delivered above and beyond my expectations, demonstrating professionalism and attention to detail throughout the process. Her communication was excellent, and she was always receptive to any requests or feedback. I highly recommend her services to anyone looking for high-quality house cleaning.",
    image:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600",
    countryFlag:
      "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
  },
];

function Reviews() {
  const [starsArray, setStarsArray] = useState(
    Array(reviewsData[0].stars).fill(null)
  );

  const renderStars = (stars) => {
    return starsArray.map((_, index) => (
      <img key={index} src="/img/star.png" alt="" />
    ));
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviewsData.map((review, index) => (
        <div key={index} className="reviews-item">
          <div className="reviews-item__user">
            <img className="reviews-item__userpp" src={review.image} alt="" />
            <div className="reviews-item__userInfo">
              <span>{review.user}</span>
              <div className="reviews-item__user__country">
                <span>{review.location}</span>
              </div>
            </div>
          </div>
          <div className="reviews-item__stars">
            {renderStars(review.stars)}
            <span>{review.stars}</span>
          </div>
          <p>{review.review}</p>
          <div className="reviews-item__helpful">
            <span>Helpful?</span>
            <img src="/img/like.png" alt="" />
            <span>Yes</span>
            <img src="/img/dislike.png" alt="" />
            <span>No</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
