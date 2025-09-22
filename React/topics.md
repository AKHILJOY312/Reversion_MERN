# React, Redux, and Web Development Roadmap

---

## 1. ReactJS Core Concepts

### React Architecture and Fundamentals

- How React works: Reconciliation, React Fiber, Diffing algorithm
- Virtual DOM vs Actual DOM
- SPA vs MPA
- Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)
- Concurrent Mode, Automatic Batching, Hydration
- One-way data binding
- Event Pooling and Synthetic Events
- Conditional & Dynamic Rendering
- Props.children and Prop Drilling
- Library vs Framework
- React 19 features, Server components, Current React version
- JSX vs HTML, ESModules, Transpiler vs Compiler, Dead code elimination
- Shadow DOM, dangerouslySetInnerHTML, HTML sanitization

### Components

- Class vs Functional Components
- Stateless vs Stateful Components
- Pure Components, React.memo
- Controlled vs Uncontrolled Components
- Built-in Components, HOCs, Render Props, React Mixins
- Lifecycle Methods (Class + Functional via useEffect)
- Component unmounting
- Spread operator in state updates
- Props Proxy for HOC
- Nested & Dynamic routing with React Router

### State and Props Management

- State vs Normal variables, Immutability
- Lifting state up
- Child-to-parent, Parent-to-child, Sibling communication
- PropTypes validation, Key props
- Callback functions in setState

### Hooks

- Rules of Hooks & lifecycle replacement
- useState, useReducer
- useEffect: dependency array, cleanup function, async callbacks
- useLayoutEffect
- useRef: storing data, communication, forwardRef, useImperativeHandle
- useMemo, useCallback
- useContext, useTransition, useFormState, useId
- useLocation, useNavigate vs useHistory, useParams
- Custom Hooks

### Performance Optimization

- Memoization (useMemo, React.memo, useCallback)
- Optimistic updates, Code splitting, Lazy Loading
- Suspense and fallback
- React Profiler, handling memory leaks
- Debouncing & Throttling, Referential Equality, Stale Closure

### Routing

- Routers: BrowserRouter, HashRouter, MemoryRouter
- Outlet, Link props
- Reading query & path params
- Protected Routes
- Dynamic imports & ES Modules

### Event Handling

- Event handlers: onClick, onChange
- Prevent default, Synthetic Events
- Event pooling

### Context API

- Implementation, workflow, limitations
- Context API vs Redux
- Passing data deeply, multiple useContext in a component

### Miscellaneous

- Viewport, Navigator, Browser DOM node structure
- PNG vs JPG, Vector images, Base64
- Reusability, Latest React features, JIT compilation

---

## 2. Redux and State Management

### Core Concepts

- Redux flow: Action → Reducer → Store → UI
- Single source of truth, Immutability, Pure Reducers
- Flux architecture, Redux vs Flux vs Context API vs MobX/Zustand
- Redux store, getState, dispatch, Provider
- Middleware: applyMiddleware, Logger, custom middleware
- Redux Thunk vs Redux Saga
- Redux Toolkit: slices, configureStore
- Redux Persist: storage, implementation
- DevTools: Debugging

### Actions & Reducers

- Action Creators, Dispatch, Payload
- Synchronous vs Asynchronous actions
- combineReducers, extraReducers
- Testing Reducers

### Practical Redux Implementations

- Counter, Todo app, Auto increment/decrement counter
- Create a component to add items to a list
- Save and render Redux store data
- Dispatching actions, Updating state

---

## 3. JWT and Authentication

### JWT Fundamentals

- Structure: Header, Payload, Signature
- Claims, Signing algorithm, Security
- Token storage, Expiry, Refresh workflow
- Access token vs Refresh token
- Server validation vs Client decoding
- Protect admin URLs using JWT

### Cookies and Sessions

- httpOnly cookies
- Session vs Tokens
- Logout behavior

### Security

- XSS, CORS
- Protect APIs and routes
- Authentication & Authorization
- Don’t log tokens in code

---

## 4. HTTP and APIs

### HTTP Status Codes

- 204, 201, 400, 401, 403
- Request-Response cycle

### API Concepts

- REST API, OpenAPI reference
- Query params, Path params, API error handling
- Express.json usage

### Axios and Fetch

- Axios vs Fetch, response.json()
- Axios interceptors and instances
- Axios cancelToken
- Debouncing API calls

---

## 5. Browser Storage

- LocalStorage & disadvantages
- SessionStorage, Cookies
- Use cases and limitations
- Why localStorage cannot replace Redux

---

## 6. Practical Tasks

### React Hooks Practice

- Counter using useState/useReducer/useContext
- Calculator with useReducer/useContext
- On-Off toggle button
- useMemo example (avoiding recalculation)
- useRef: change text/div color, timer, average computation
- Child-to-parent data using useRef, callbacks, Context
- Fetch API data using useEffect
- Custom Hooks, useCallback, useMemo scenarios

### Routing & Navigation

- Nested dropdowns
- Protected routes
- Dynamic route handling

### Performance Optimization

- Lazy loading, code splitting
- Handling millions of records
- Memoization & optimizations

### Project-Related Tasks

- Ensure data completeness, fix UI & bugs
- Add/edit/delete features
- Authentication handling
- Pagination and search with backend API
- File validation, logging, refresh token implementation

---

## 7. Optimization and Performance

- Throttling vs Debouncing
- Memoization: React.memo, useMemo, useCallback
- Optimistic updates
- Lazy loading & Dynamic imports
- Suspense
- Redux optimization techniques

---

## 8. Build Tools and Dependencies

- Package.json scripts, DevDependencies vs Dependencies
- Webpack, Babel, Polyfills
- Vite: advantages, vite.config.js, project setup

---

## 9. Testing and Debugging

- Testing Redux reducers
- Redux DevTools
- React Profiler

---

## Notes & Pending Items

- Statelss vs Stateful component clarity
- Controlled vs Uncontrolled component
- HOC better definition
- useId usage
- useNavigate vs useHistory clarity
- Redux workouts & practical exposure
- Explore [react.dev](https://react.dev)
