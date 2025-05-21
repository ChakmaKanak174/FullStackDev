import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(goal.text);

  const handleUpdate = () => {
    if (editedText.trim()) {
      dispatch(updateGoal({ id: goal._id, text: editedText }));
      setIsEditing(false);
    }
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button
            onClick={() => {
              const updatedGoal = {
                id: goal._id,
                text: editedText,
              };
              dispatch(updateGoal(updatedGoal));
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="btn btn-sm"
            onClick={() => {
              setEditedText(goal.text);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2>{goal.text}</h2>
          <div style={{ display: "flex", gap: "8px", flexDirection: "row" }}>
            <button onClick={() => setIsEditing(true)}>
              <FaEdit />
            </button>
            <button
              onClick={() => dispatch(deleteGoal(goal._id))}
              className="close"
            >
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GoalItem;
