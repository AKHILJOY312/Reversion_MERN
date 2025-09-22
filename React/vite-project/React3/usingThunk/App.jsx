import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./action";

function App() {
  const { user, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Redux Thunk Login Demo</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={() => dispatch(loginUser())}>Login</button>
      )}
    </div>
  );
}

export default App;
