//How do you fetch data from an API in React using the useEffect hook?
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("coud'nt featch");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Post:</h1>
      {posts.slice(0, 5).map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}

export default App;
