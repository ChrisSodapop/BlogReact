import React from "react";

function Angular({ blog }) {
  return (
    <div>
      {blog
        .filter((el) => el.category === "Angular")
        .map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Angular;
