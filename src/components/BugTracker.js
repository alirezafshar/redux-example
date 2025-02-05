import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBug, removeBug, updateBug } from "../redux/reducer/bugSlice";

const BugTracker = () => {
  const [bugDesc, setBugDesc] = useState("");
  const bugs = useSelector((state) => state.bugs);
  const dispatch = useDispatch();

  return (
    <main className="block">
      <label htmlFor="bugDesc">
        Describe Your Bug Ticket:
        <input
          id="bugDesc"
          type="text"
          value={bugDesc}
          onChange={(e) => setBugDesc(e.target.value)}
        />
      </label>
      <div>
        <button
          className="App-link"
          onClick={() => dispatch(addBug({ description: bugDesc }))}
        >
          Add Bug
        </button>
      </div>
      {bugs.length > 0 &&
        bugs.map((bug) => (
          <div key={bug.id}>
            <ul>
              <li>id: {bug.id}</li>
              <li>description: {bug.description ? bug.description : "N/A"}</li>
              <li>status: {`${bug.resolve}`}</li>
            </ul>
            <button
              className="App-link"
              onClick={() => dispatch(updateBug({ id: bug.id }))}
            >
              Update Status
            </button>
            <button
              className="App-link"
              onClick={() => dispatch(removeBug({ id: bug.id }))}
            >
              Remove Bug
            </button>
          </div>
        ))}
    </main>
  );
};

export default BugTracker;
