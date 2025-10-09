import { useActionState } from "react";

function MyForm() {
  const [state, formAction] = useActionState(
    async (previousState, formData) => {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const email = formData.get("email");
      const password = formData.get("password");

      if (email === "test@example.com" && password === "password") {
        return { success: true, message: "Login successful!" };
      } else {
        return { success: false, message: "Invalid credentials." };
      }
    },
    { success: false, message: "" }
  ); // Initial state

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
export default MyForm;
