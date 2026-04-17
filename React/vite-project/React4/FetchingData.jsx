import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to install: npm install axios

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        // Axios stores the data in the .data property
        setPosts(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
