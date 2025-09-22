//How do you fetch data from an API in React using the useEffect hook?
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(" 404 not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
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
