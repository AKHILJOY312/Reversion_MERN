import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "./slice";

function App() {
  const dispatch = useDispatch();
  const { data: user, status, error } = useSelector((state) => state.user);

  const handleFetchUser = () => {
    dispatch(fetchUserById(1));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <button onClick={handleFetchUser} disabled={status === "loading"}>
        {status === "loading" ? "Loading..." : "Fetch User Data"}
      </button>

      {status === "succeeded" && user && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}

      {status === "failed" && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
