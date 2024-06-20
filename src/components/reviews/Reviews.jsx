import React from "react";
import "./Reviews.scss";
import { projects } from "../../../temporaryData";

function Reviews({ currentProName }) {
  const renderStars = (stars) => {
    const starsArray = Array(stars).fill(null);
    return starsArray.map((_, index) => (
      <img key={index} src="/img/star.png" alt="star" />
    ));
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {projects.map(
        (project) =>
          currentProName === project.username && (
            <div key={project.id} className="reviews-item">
              {project.reviews.map((review, index) => (
                <div key={index} className="reviews-item__review">
                  <div className="reviews-item__user">
                    <img
                      className="reviews-item__userpp"
                      src={review.image}
                      alt="user profile"
                    />
                    <div className="reviews-item__userInfo">
                      <span>{review.user}</span>
                      <div className="reviews-item__user__location">
                        <span>{review.location}</span>
                      </div>
                    </div>
                    <div className="reviews-item__stars">
                      {renderStars(review.stars)}
                    </div>
                  </div>
                  <p>{review.review}</p>
                  <div className="reviews-item__helpful">
                    <span>Helpful?</span>
                    <img src="/img/like.png" alt="like" />
                    <span>Yes</span>
                    <img src="/img/dislike.png" alt="dislike" />
                    <span>No</span>
                  </div>
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
}

export default Reviews;
