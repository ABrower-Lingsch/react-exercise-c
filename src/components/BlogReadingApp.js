import { useState } from "react";

function BlogReadingApp({ INITIAL_STATE, activePost, blogs, setActivePost }) {
  //setting the key helps react identify which post to display when the title it clicked
  //setActicePost its telling it which post should be visible
  const blogTitles = blogs.map((blog) => (
    <p key={blog.id} onClick={() => setActivePost(blog)}>
      {blog.title}
    </p>
  ));

  return (
    <body>
      <h1>Blog Reading App</h1>
      <main>
        <section className="blogOptions">
          <h2>Check out these posts!</h2>
          <div className="blogTitles">{blogTitles}</div>
        </section>
        <section className="blogBodies">
          {activePost && (
            <>
              <h2>{activePost.title}</h2>
              <p>{activePost.body}</p>
            </>
          )}
        </section>
      </main>
    </body>
  );
}

export default BlogReadingApp;
