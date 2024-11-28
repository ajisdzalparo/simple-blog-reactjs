import postsData from "../posts.json";
import { useState } from "react";

import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filterPosts = postsData.filter((item) => item.title.toLowerCase().includes(value));
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search
        onSearchChange={onSearchChange}
        totalPosts={totalPosts}
      />
      {posts.map((props, index) => {
        return (
          <>
            <Article
              key={index}
              {...props}
            />
          </>
        );
      })}
    </>
  );
}
export default Homepage;
