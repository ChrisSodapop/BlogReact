import React from "react";

function BlogReact({blog}) {
  return <div>
    {blog
    .filter(el => el.category === "React")
    .map((el)=> {
      return (
        <div key={el.id}>
        <h1>{el.title}</h1>
        <p>{el.content}</p>
        </div>
      )
    })
    }
  </div>;
}

export default BlogReact;
