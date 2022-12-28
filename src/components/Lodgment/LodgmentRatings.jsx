import React from "react";
import { ReactComponent as Star } from "./star.svg";

function LodgmentRatings(props) {
  const ratingNumber = [1, 2, 3, 4, 5];
  // Affichage des notes du logement
  return (
    <div className="lodgment_rating">
      {ratingNumber.map((el) => {
        return (
          <Star
            fill={el <= props.ratings ? "#ff6060" : "#f7f7f7"}
            key={`star-${el}`}
            className="lodgment_star"
          ></Star>
        );
      })}
    </div>
  );
}

export default LodgmentRatings;
