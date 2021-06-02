import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      genre: "Rock",
      kind: "Albums",
    },
    {
      id: 2,
      genre: "Pop",
      kind: "Songs",
    },
    {
      id: 3,
      genre: "Jazz",
      kind: "Artists",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
