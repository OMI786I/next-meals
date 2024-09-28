import React from "react";

const page = async ({ params }) => {
  let data = await fetch(`http://localhost:3000/api/meals/${params.slug}`);
  let posts = await data.json();

  console.log(params.slug);
  console.log(posts);

  return (
    <div className="h-screen z-50">
      <h1>{posts.title}</h1>
    </div>
  );
};

export default page;
