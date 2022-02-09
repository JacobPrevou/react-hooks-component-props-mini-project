import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {
  
  return (
    <div className="App">
      <Header name="Jake's Practice Posts"></Header>
      <About text="I Get It Now: How I Got It"></About>
      <ArticleList>
        
      </ArticleList>
    </div>
  );
}

export default App;
