import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price, removeTour } = props;
  const [isReadMore, setIsReadMore] = useState(true);

  // useEffect(() => {
  //   // info.length > 200 ? setIsReadMore(true) : setIsReadMore(false);
  // }, []);

  function handleReadMore() {
    setIsReadMore(false);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
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
      </footer>
    </article>
  );
};

export default Tour;
