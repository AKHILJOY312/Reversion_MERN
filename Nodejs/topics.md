# Structured Node.js Study Guide

## 1. Introduction to Node.js

- **What is Node.js?**
  - Overview of Node.js as a runtime environment.
  - Single-threaded, non-blocking, asynchronous nature.
  - Use cases and applications of Node.js.
- **Node.js Architecture**
  - V8 Engine: Role in executing JavaScript.
  - Libuv: Features and benefits for handling asynchronous I/O.
  - Event-driven architecture and reactor pattern.
- **Key Features of Node.js**
  - Single-threaded vs multi-threaded.
  - Synchronous vs asynchronous execution.
  - Cross-platform compatibility.
- **Event-Driven Programming**
  - Concept of event-driven architecture.
  - Practical implementation with EventEmitter.
- **REPL (Read-Eval-Print Loop)**
  - Usage and practical examples.
- **Global Objects**
  - `__dirname`, `__filename`, `module`, `process`.
- **Framework vs Library**
  - Differences and examples in the context of Node.js.
- **Pending Tasks**
  - Gain clarity on Node.js architecture and event-driven programming.
  - Practical REPL exercises.

---

## 2. Node.js Modules & Package Management

- **Module System**
  - CommonJS vs ES Modules (`require` vs `import`).
  - `module.exports` and module creation.
  - Core, local, and third-party modules.
- **Package Management**
  - npm vs npx: Differences and use cases.
  - `package.json` vs `package-lock.json`: Purpose and structure.
  - Dependencies: Global vs local, devDependencies vs production dependencies.
  - Scaffolding: Setting up a Node.js project (`npm init`).
  - Nodemon: Usage for development.
  - Scripts: Writing scripts in `package.json` (e.g., start, dev).
  - `.npmrc`: Configuration for npm.
- **Environment Variables**
  - Using `.env` files with dotenv package.
  - Accessing environment variables without `.env`.
  - Storing secrets securely.
- **Pending Tasks**
  - Explore `package.json` scripts in detail.
  - Clarify scope of npm packages and `.npmrc` usage.

---

## 3. File System (FS) Module

- **Core Operations**
  - Reading and writing files (`fs.readFile`, `fs.writeFile`).
  - File operations: `fs.stat`, `fs.rename`, `fs.unlink`, `fs.existsSync`.
  - Practical: Writing current date/time to a file.
- **Streams and Buffers**
  - Buffer: Purpose and usage (e.g., handling binary data).
  - Streams: Readable, Writable, Duplex, Transform.
  - Piping: Transferring data between streams.
  - Practical: Implement `readStream` and transfer data using `pipe`.
- **Pending Tasks**
  - Practical exercises with fs module (e.g., create file if not exists, else read it).
  - Clarify Buffer vs Stream and Transform Stream.
  - Write hashed data to a file using fs.

---

## 4. HTTP & Networking in Node.js

- **HTTP Module**
  - Creating a server with `http.createServer`.
  - Components of HTTP request and response.
  - HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, TRACE.
  - Idempotency: PUT vs POST vs PATCH.
  - Setting headers: `writeHead` vs `setHeader`.
  - Common HTTP status codes (200, 201, 204, 400, 401, 403, 404, 500).
- **HTTPS Module**
  - Differences between HTTP and HTTPS.
  - Setting up an HTTPS server with SSL/TLS.
  - Default port for HTTPS (443).
- **URL Module**
  - Parsing URLs: `url.parse`, `url.format`, `url.resolve`.
  - Practical: Parse a URL for routing.
- **Path Module**
  - Handling file paths: `path.join`, `path.resolve`, `path.basename`.
  - Differences between path and url modules.
- **Pending Tasks**
  - Create an API endpoint to add or divide two numbers (using path/query params).
  - Understand HTTP request structure and headers in detail.
  - Clarify `writeHead` vs `setHeader`.

---

## 5. Express.js

- **Basics**
  - Installing Express (`npm install express --save`).
  - Creating an Express app (`express()`).
  - `app.listen`, `app.get`, `app.post`, `app.put`, `app.delete`, `app.all`.
- **Middleware**
  - What is Middleware?: `req`, `res`, `next()`.
  - Types of Middleware:
    - Application-level (`app.use`).
    - Router-level (`express.Router`).
    - Built-in (`express.json`, `express.urlencoded`, `express.static`).
    - Third-party (morgan, multer, cookie-parser).
    - Error-handling middleware (`err, req, res, next`).
  - Practical: Middleware to block POST or DELETE requests, cache incoming request URLs, or validate headers.
  - Pending: Clarify middleware positioning and use cases.
- **Routing**
  - Dynamic routing and router chaining (`router.route`).
  - Query parameters (`req.query`) vs path parameters (`req.params`).
  - Practical: Pass and read query/path params in APIs.
- **Static Files**
  - Configuring static files with `express.static`.
  - Practical: Serve static files from a public folder.
- **Body Parsing**
  - `express.json()` vs `express.urlencoded()`: Differences and use cases.
  - body-parser middleware.
- **Response Methods**
  - `res.send` vs `res.json` vs `res.write` vs `res.end`.
  - `res.render` for server-side rendering.
  - Practical: Render plain HTML or use a view engine.
- **View Engine**
  - Setting up a view engine (e.g., EJS).
  - Partials and template inheritance.
  - Practical: Pass data to templates.
- **Pending Tasks**
  - Create middleware to block specific HTTP methods.
  - Explore `app.set` vs `app.use` vs `app.locals`.
  - Implement form validation and handle form submissions.
  - Clarify `express.nocache()` and its use.

---
