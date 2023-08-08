import { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price, removeTour } = props;
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {isReadMore ? info.substring(0, 200) + "..." : info}
          <button
            onClick={() => {
              setIsReadMore(!isReadMore);
            }}
          >
            {isReadMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
