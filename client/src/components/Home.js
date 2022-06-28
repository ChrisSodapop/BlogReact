import React from "react";

function Home({ blog }) {
  console.log(blog);
  return (
    <div>
      {blog.map((el) => {
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

export default Home;
