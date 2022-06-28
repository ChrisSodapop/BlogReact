import React from "react";

function WildCodeSchool({ blog }) {
  return (
    <div>
      {" "}
      {blog
        .filter((el) => el.category === "Wild Code School")
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

export default WildCodeSchool;
