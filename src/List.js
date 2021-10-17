import React from "react";

const List = ({ series }) => {
  return (
    <>
      {series.map((item) => {
        const { id, name, rating, releaseDate, image, description } = item;
        return (
          <article key={id} className="item">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>Rating: {rating}</p>

              <p>Release data: {releaseDate}</p>

              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
