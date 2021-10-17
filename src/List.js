import React from "react";

const List = ({ series }) => {
  return (
    <>
      {series.map((ser) => {
        const { id, name, releaseDate, image } = ser;
        return (
          <article key={id} className="ser">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{releaseDate}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
