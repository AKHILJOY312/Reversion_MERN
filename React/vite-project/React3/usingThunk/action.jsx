// Async action creator (Thunk)
export function loginUser() {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try {
      // Fake API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: "AJ", token: "abc123" }), 1500)
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", error: "Login failed" });
    }
  };
}
