import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPost } from "../redux/reducer/postSlice";
import { addPost } from "../redux/reducer/postSlice";

const Post = () => {
  const postList = useSelector(selectAllPost);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <main className="block">
      <p>Add New Post</p>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title">Content:</label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="App-link" type="submit">
          Submit
        </button>
      </form>
      {postList.length > 1 &&
        postList.map((post) => (
          <ul key={post.id}>
            <li>TITLE: {post.title}</li>
            <li>CONTENT: {post.content}</li>
          </ul>
        ))}
    </main>
  );
};

export default Post;
