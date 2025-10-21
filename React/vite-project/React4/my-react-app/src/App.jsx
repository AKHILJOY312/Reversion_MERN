//using propdriling
import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("John");

  return (
    <Layout userName={userName}>
      <Content>
        <UserProfile userName={userName}></UserProfile>
      </Content>
    </Layout>
  );
}

function Layout({ userName, children }) {
  return (
    <div>
      <p>Layout-userName :{userName}</p>
      {children}
    </div>
  );
}

function Content() {
  return (
    <div>
      <p>Content:- User:{}</p>
    </div>
  );
}

function UserProfile({ userName }) {
  return <p> userProfile:name:{userName}</p>;
}
export default App;
