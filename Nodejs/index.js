const express = require("express");
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Example route that handles JSON data
app.post("/api/users", (req, res) => {
  // req.body will contain the parsed JSON data
  const { name, email } = req.body;

  // Process the data (in a real app, you'd save to database, etc.)
  console.log("Received user data:", { name, email });

  // Send JSON response
  res.json({
    message: "User created successfully!",
    user: { name, email },
  });
});

// Handle parsing errors
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      error: "Invalid JSON format",
    });
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
