import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "It is hard to learn without this tutorial",
  },
  {
    id: "2",
    title: "Slices...",
    content: "Need you know more about Redux Toolkit",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // push here is from createSlice which is based on immer.js.
        // in immer.js with push create a copy of state with new data instead of using spread operation
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
