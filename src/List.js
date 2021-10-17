import React from "react";

const List = ({ series }) => {
  return (
    <>
      {series.map((ser) => {
        const { id, name, releaseDate, image, description } = ser;
        return (
          <article key={id} className="ser">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>

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
