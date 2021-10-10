import React from "react";
import "./styles/app.css";

function App() {
  function create() {}
  return (
    <div id="page-app">
      <div className="content">
        <h1>Login</h1>
        <form onSubmit={create}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
}

export default App;
