import { useState } from "react";

const INITIAL_STATE = [
  {
    id: 1,
    title: "an awesome title goes here",
    body: "body of post goes here",
  },
  {
    id: 2,
    title: "another blog title here",
    body: "another body of post goes here",
  },
];

function BlogReadingApp() {
  const [blogs, setBlogs] = useState(INITIAL_STATE);
  const [activePost, setActivePost] = useState();

  const blogTitles = blogs.map((blog) => (
    <p key={blog.id} onClick={() => setActivePost(blog)}>
      {blog.title}
    </p>
  ));

  return (
    <div>
      <div>{blogTitles}</div>
      {activePost && (
        <>
          <h2>{activePost.title}</h2>
          <p>{activePost.body}</p>
        </>
      )}
    </div>
  );
}

export default BlogReadingApp;
