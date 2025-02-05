import { createSlice } from "@reduxjs/toolkit";

let bugId = 0;

const bugSlice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    addBug: (state, action) => {
      return [
        ...state,
        {
          id: ++bugId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    },
    updateBug: (state, action) => {
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: !bug.resolve }
      );
    },
    removeBug: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export const { addBug, updateBug, removeBug } = bugSlice.actions;
export default bugSlice.reducer;
